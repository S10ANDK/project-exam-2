import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { API_URL, API_VENUES } from '../../constants/urls';
import * as S from './index.styled';
import { useParams } from 'react-router-dom';
import LoadingIndicator from '../../styles/LoadingIndicator/index.styled';
import ErrorMessage from '../../messages/ErrorMessage';
import placeholderImage from '../../../assets/placeholderImage.png';
import CloseIcon from '../../../assets/close.png';
import Star from '../../../assets/starblue.png';
import MaxGuestIcon from '../../../assets/user.png';
import LocationIcon from '../../../assets/location.png';
import AvatarPlaceholderImage from '../../../assets/profile.png';
import { submitBooking } from '../../api/submitBooking';
import DatePicker from 'react-datepicker';
import { parseISO, eachDayOfInterval, differenceInDays } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';

function GetSpecificVenue() {
  const { id } = useParams();
  const [venue, setVenue] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [avatarImageError, setAvatarImageError] = useState(false);
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [guests, setGuests] = useState(1);
  const [bookingResponse, setBookingResponse] = useState(null);
  const [bookingDates, setBookingDates] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [errors, setErrors] = useState({
    guests: '',
    dateFrom: '',
    dateTo: '',
  });

  useEffect(() => {
    if (dateFrom && dateTo && venue) {
      const nights = differenceInDays(dateTo, dateFrom);
      const price = nights * venue.price;
      setTotalPrice(price);
    }
  }, [dateFrom, dateTo, venue]);

  useEffect(() => {
    const fetchVenue = async () => {
      try {
        const response = await fetch(
          `${API_URL}${API_VENUES}/${id}?_bookings=true&_owner=true`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch venue');
        }
        const data = await response.json();

        const bookingDates = data.bookings.flatMap((booking) =>
          eachDayOfInterval({
            start: parseISO(booking.dateFrom),
            end: parseISO(booking.dateTo),
          })
        );

        setVenue(data);
        setBookingDates(bookingDates);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    };

    fetchVenue();
  }, [id]);

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (isError) {
    return <ErrorMessage />;
  }

  const handleImageError = () => {
    setImageError(true);
  };

  const handleAvatarImageError = () => {
    setAvatarImageError(true);
  };

  const handleImageClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const validateForm = () => {
    let newErrors = {
      guests: '',
      dateFrom: '',
      dateTo: '',
    };

    if (!guests || guests < 1) {
      newErrors.guests = 'Guests must be at least 1';
    } else if (guests > venue.maxGuests) {
      newErrors.guests = `Max guests is ${venue.maxGuests}`;
    }

    if (!dateFrom) {
      newErrors.dateFrom = 'Date from is required';
    }

    if (!dateTo) {
      newErrors.dateTo = 'Date to is required';
    } else if (dateTo < dateFrom) {
      newErrors.dateTo = 'Date To should be later than Date From';
    }

    setErrors(newErrors);

    for (let error in newErrors) {
      if (newErrors[error]) return false;
    }

    return true;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const bookingResponse = await submitBooking(
          id,
          dateFrom,
          dateTo,
          guests
        );
        setBookingResponse(bookingResponse);
      } catch (error) {
        console.error(error);
      }
    } else {
      console.error(errors);
    }
  };

  return (
    <>
      <Helmet>
        <title>{venue ? venue.name : ''} | holidaze</title>
        <meta name="description" content={venue ? venue.description : ''} />
      </Helmet>

      {venue && (
        <S.SpecificVenueContainer>
          <S.ContentContainer>
            <S.VenueDate>
              Published: {new Date(venue.created).toUTCString()}
              {venue.updated !== venue.created &&
                ` | Updated: ${new Date(venue.updated).toGMTString()}`}
            </S.VenueDate>
            {venue.media.length > 0 ? (
              <S.ImageContainer>
                <S.Image
                  isFirst
                  src={imageError ? placeholderImage : venue.media[0]}
                  alt="Venue Image"
                  onClick={handleImageClick}
                  onError={handleImageError}
                />
                {venue.media.length > 1 && (
                  <S.MoreImagesIndicator>
                    +{venue.media.length - 1}
                  </S.MoreImagesIndicator>
                )}
              </S.ImageContainer>
            ) : (
              <S.ImageContainer>
                <S.Image
                  isFirst
                  src={placeholderImage}
                  alt="Venue Image"
                  onClick={handleImageClick}
                  onError={handleImageError}
                />
              </S.ImageContainer>
            )}
            {modalOpen && (
              <S.ModalContainer onClick={closeModal}>
                <S.ModalContent>
                  <S.ModalCloseButton onClick={closeModal}>
                    <S.ModalCloseIcon
                      src={CloseIcon}
                      alt="Close modal button"
                    />
                  </S.ModalCloseButton>
                  {venue.media.length > 0 ? (
                    venue.media.map((mediaUrl, index) => (
                      <S.ModalImage
                        key={index}
                        src={imageError ? placeholderImage : mediaUrl}
                        alt={`Image ${index + 1}`}
                        onError={handleImageError}
                      />
                    ))
                  ) : (
                    <S.ModalImage
                      src={placeholderImage}
                      alt="Placeholder Image"
                      onError={handleImageError}
                    />
                  )}
                </S.ModalContent>
              </S.ModalContainer>
            )}
            <S.VenueNameAndDescriptionContainer>
              <S.VenueNameAndRatingContainer>
                <S.VenueName>{venue.name}</S.VenueName>
                <S.RatingContainer>
                  {venue.rating > 0 && (
                    <>
                      <img src={Star} alt="Star rating Icon" />
                      {venue.rating}
                    </>
                  )}
                </S.RatingContainer>
              </S.VenueNameAndRatingContainer>
              <S.VenueManagerContainer>
                {venue.owner.avatar ? (
                  <S.VenueManagerAvatar
                    src={
                      avatarImageError
                        ? AvatarPlaceholderImage
                        : venue.owner.avatar
                    }
                    alt="Avatar by owner"
                    onError={handleAvatarImageError}
                  />
                ) : (
                  <S.VenueManagerAvatar
                    src={AvatarPlaceholderImage}
                    alt="Avatar by owner"
                    onError={handleAvatarImageError}
                  />
                )}
                <S.VenueManager>by {venue.owner.name} </S.VenueManager>
              </S.VenueManagerContainer>
              <S.DescriptionContainer>
                {venue.description}
              </S.DescriptionContainer>
            </S.VenueNameAndDescriptionContainer>

            <S.maxGuestsAndPriceContainer>
              <S.MaxGuestsContainer>
                <img src={MaxGuestIcon} alt="Guests Icon" />
                {venue.maxGuests}
              </S.MaxGuestsContainer>

              <S.Price>
                {venue.price} kr NOK <span>night</span>
              </S.Price>
            </S.maxGuestsAndPriceContainer>
            {bookingResponse && (
              <S.BookingSuccessMessage>
                <h2>Booking Successful!</h2>
                <p>Your booking id is: {bookingResponse.id}</p>
                {/* <p>
                  Date from:{' '}
                  <span>
                    {new Date(bookingResponse.dateFrom)
                      .toISOString()
                      .slice(0, 10)}
                  </span>
                </p>
                <p>
                  Date to:{' '}
                  <span>
                    {new Date(bookingResponse.dateTo)
                      .toISOString()
                      .slice(0, 10)}
                  </span>
                </p>
                <p>
                  Guests: <span>{bookingResponse.guests}</span>
                </p> */}
                <p>
                  Total Price: <span>{totalPrice} kr NOK</span>
                </p>
              </S.BookingSuccessMessage>
            )}
            <S.BookingFormContainer>
              <S.BookingForm onSubmit={handleFormSubmit}>
                <label>Guests</label>
                <S.GuestContainer>
                  <S.GuestInput
                    type="number"
                    min={1}
                    max={venue.maxGuests}
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    required
                  />
                  <p>
                    {'//'} max {venue.maxGuests}
                  </p>
                </S.GuestContainer>
                <DatePicker
                  selected={dateFrom}
                  onChange={(date) => setDateFrom(date)}
                  selectsStart
                  startDate={dateFrom}
                  endDate={dateTo}
                  minDate={new Date()}
                  excludeDates={bookingDates}
                  isClearable
                  placeholderText="From"
                />
                <S.FormError>
                  {errors.dateFrom && <div>{errors.dateFrom}</div>}
                </S.FormError>
                <DatePicker
                  selected={dateTo}
                  onChange={(date) => setDateTo(date)}
                  selectsEnd
                  startDate={dateFrom}
                  endDate={dateTo}
                  minDate={dateFrom}
                  excludeDates={bookingDates}
                  isClearable
                  placeholderText="To"
                />
                <S.FormError>
                  {errors.dateTo && <div>{errors.dateTo}</div>}
                </S.FormError>
                <S.TotalPrice>Total Price: {totalPrice} kr NOK</S.TotalPrice>
                <S.SubmitBookingButton type="submit">
                  Book Now
                </S.SubmitBookingButton>
              </S.BookingForm>
            </S.BookingFormContainer>

            <S.LocationAndFacilitiesContainer>
              <S.FacilitiesContainer>
                <ul>
                  <li>
                    <span>Wi-Fi:</span> {venue.meta.wifi ? 'Yes' : 'No'}
                  </li>
                  <li>
                    <span>Pets:</span> {venue.meta.pets ? 'Yes' : 'No'}
                  </li>
                  <li>
                    <span>Parking:</span> {venue.meta.parking ? 'Yes' : 'No'}
                  </li>
                  <li>
                    <span>Breakfast:</span>{' '}
                    {venue.meta.breakfast ? 'Yes' : 'No'}
                  </li>
                </ul>
              </S.FacilitiesContainer>
              {venue.location.address ||
              venue.location.city ||
              venue.location.zip ||
              venue.location.country ? (
                <S.LocationContainer>
                  <img src={LocationIcon} alt="Location Icon" />
                  <div>
                    <span>
                      {venue.location.address
                        ? `${venue.location.address}, `
                        : ''}
                    </span>
                    <div>
                      {venue.location.city ? `${venue.location.city} ` : ''}
                      {venue.location.zip ? `${venue.location.zip}, ` : ''}
                    </div>
                    {venue.location.country || ''}
                  </div>
                </S.LocationContainer>
              ) : null}
            </S.LocationAndFacilitiesContainer>
            <S.OwnerEmail>
              Contact owner via e-mail:{' '}
              <a href={`mailto:${venue.owner.email}`}>{venue.owner.email}</a>
            </S.OwnerEmail>
          </S.ContentContainer>
        </S.SpecificVenueContainer>
      )}
    </>
  );
}

export default GetSpecificVenue;
