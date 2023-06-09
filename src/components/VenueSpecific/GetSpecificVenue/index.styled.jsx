import styled, { keyframes } from 'styled-components';
import {
  StyledButtonRed,
  StyledButtonBlue,
} from '../../styles/Button/index.styled';

export const Error = styled.p``;

export const SpecificVenueContainer = styled.div``;

export const ContentContainer = styled.div`
  @media (min-width: 1200px) {
    display: grid;
    max-width: 1200px;
    column-gap: 60px;
    grid-template-rows: 0.3fr 0.3fr;
    grid-template-columns: 1fr 1fr;
    margin-top: 70px;
  }
`;

export const VenueDate = styled.p`
  font-style: Serenity, sans-serif;
  font-size: 0.7rem;
  font-style: italic;
  margin: 10px auto;
  max-width: 500px;

  @media (min-width: 1200px) {
    display: flex;
    align-items: center;
    justify-content: right;
    margin: 0px 38px;
    grid-row: 2;
    grid-column: 2;
  }
`;

export const VenueNameAndDescriptionContainer = styled.div`
  grid-row: 1;
  grid-column: 2;
  max-width: 500px;
  margin: auto;

  @media (min-width: 1200px) {
    border-bottom: 1px solid ${(props) => props.theme.color.borders};
    height: 380px;
    width: 500px;
  }
`;

export const VenueNameAndRatingContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 500px;
  margin: 10px auto;

  @media (min-width: 1200px) {
    margin-top: 0px;
  }
`;

export const VenueName = styled.h1`
  text-align: left;
  font-size: 1.8rem;
  margin: 10px 0px;
`;

export const RatingContainer = styled.div`
  display: flex;
  flex-direction: row;

  img {
    width: 20px;
    height: 20px;
    margin-right: 3px;
  }
`;

export const VenueManagerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 500px;
  text-align: left;
  margin-bottom: 20px;
`;

export const VenueManagerAvatar = styled.img`
  width: 25px;
  height: 25px;
  object-fit: cover;
  border-radius: 5px;
`;

export const VenueManager = styled.p`
  font-size: 0.9rem;
  margin-left: 10px;
`;

export const DescriptionContainer = styled.div`
  max-width: 500px;

  margin: auto;
  grid-row: 2;
  grid-column: 1;
  overflow: auto;
  line-height: 25px;

  @media (min-width: 1200px) {
    max-height: 220px;
  }
`;

export const maxGuestsAndPriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 30px auto;
  max-width: 500px;

  @media (min-width: 550px) {
    width: 500px;
    margin: 30px auto;
  }
`;

export const MaxGuestsContainer = styled(RatingContainer)`
  img {
    width: 18px;
    height: 18px;
    margin-right: 4px;
  }
`;

export const Price = styled.p`
  margin-right: 0px;
  font-size: 1.2rem;
  color: ${(props) => props.theme.color.black};
  font-weight: 600;

  span {
    font-size: 1rem;
    color: ${(props) => props.theme.color.black};
    font-weight: 400;
  }
`;

export const UpdateVenueContainer = styled.div`
  grid-row: 3;
  grid-column: 1;
  width: 100%;
  text-align: center;
  margin: auto;

  @media (min-width: 550px) {
    width: 500px;
    margin: 20px auto 0px;
  }
`;

export const UpdateVenueButton = styled(StyledButtonBlue)`
  width: 100%;
  margin: auto;
`;

export const BookingFormContainer = styled.div`
  margin-top: 40px;
  max-width: 500px;
  grid-row: 3;
  grid-column: 1;

  @media (min-width: 550px) {
    width: 500px;
    margin: 40px auto 0px;
  }
`;

export const BookingForm = styled.form`
  display: flex;
  flex-direction: column;

  div p {
    font-size: 0.9rem;
    font-style: italic;
    margin-left: 30px;
    transform: translateY(-5px);
  }

  label {
    margin: 20px 0px 10px;
  }

  input {
    text-align: center;
    height: 40px;
    margin-bottom: 10px;
    padding: 0px 10px;
    box-shadow: ${(props) => props.theme.boxShadow};
  }
`;

export const FormError = styled.div`
  color: ${(props) => props.theme.color.error};
  margin-bottom: 20px;
`;

export const GuestContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;

export const GuestInput = styled.input`
  width: 100px;
`;

export const TotalPrice = styled.div`
  margin-bottom: 20px;
`;

export const SubmitBookingButton = styled(StyledButtonRed)`
  width: 100%;
  box-shadow: ${(props) => props.theme.boxShadow};

  @media (min-width: 500px) {
    width: 64.5%;
  }
`;

export const BookingSuccessMessage = styled.div`
  border: 2px solid #228712;
  box-shadow: ${(props) => props.theme.boxShadow};
  border-radius: 5px;
  padding: 10px 20px 20px;
  max-width: 480px;
  margin: auto;
  animation: ${(props) => (props.fadeOut ? fadeOut : fadeIn)} 0.3s linear
    forwards;

  p {
    margin-bottom: 10px;
  }

  p span {
    font-weight: 600;
  }
`;

export const LoginMessageContainer = styled.div`
  text-align: left;
  margin-left: 35px;
  max-width: 500px;
  margin: auto;

  :hover {
    text-decoration: underline;
    text-underline-offset: 2px;
  }

  @media (min-width: 1200px) {
    width: 500px;
    margin: 40px auto 0px;
    flex-direction: row;
    margin: 10px 35px;
  }
`;

export const LocationAndFacilitiesContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  margin-top: 60px;
  border-top: 1px solid ${(props) => props.theme.color.borders};
  padding-top: 40px;
  max-width: 500px;

  @media (min-width: 550px) {
    width: 500px;
    margin: 40px auto 0px;
    flex-direction: row;
  }

  @media (min-width: 1200px) {
    grid-row: 4;
    grid-column: 1;
    padding-top: 0px;
    margin-top: 100px;
    border-top: none;
  }
`;

export const LocationContainer = styled.div`
  display: flex;
  flex-direction: row;
  line-height: 22px;
  max-width: 230px;
  margin: auto;

  img {
    width: 25px;
    height: 25px;
    margin-right: 5px;
  }

  div span {
    font-weight: 600;
  }

  @media (min-width: 550px) {
    min-width: 200px;
    margin: 0;
  }
`;

export const FacilitiesContainer = styled.div`
  border: 1px solid ${(props) => props.theme.color.borders};
  border-radius: 10px;
  box-shadow: ${(props) => props.theme.boxShadow};
  padding: 20px;
  margin-top: 40px;
  max-height: 150px;

  ul li {
    margin-top: 10px;
  }

  span {
    font-weight: 600;
  }

  @media (min-width: 400px) {
    padding-right: 35px;
  }

  @media (min-width: 550px) {
    margin-top: 0px;
    padding-right: 50px;
  }
`;

export const BookingsOnVenueHeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 300px;
  margin: 40px auto 0px;

  p {
    margin-right: 0px;
  }

  @media (min-width: 550px) {
    max-width: 500px;
  }

  @media (min-width: 1200px) {
    margin: 80px auto 0px;
  }
`;

export const BookingsOnVenueContainer = styled.div`
  grid-row: 4;
  grid-column: 2;
`;

export const OwnerEmail = styled.p`
  margin: 40px 0px 0px 22px;
  grid-row: 5;
  grid-column: 1;
  line-height: 25px;
  a {
    display: block;
    text-decoration: underline;
    text-underline-offset: 2px;
  }

  @media (min-width: 400px) {
    margin: 40px auto 0px;
    text-align: center;
  }

  @media (min-width: 1200px) {
    margin: 40px 0px 0px 40px;
    text-align: left;

    a {
      display: inline;
    }
  }
`;

// Image and modal

export const ImageContainer = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: end;
  align-items: start;
  width: 100%;
  max-width: 500px;
  margin: auto;
  grid-row: 1;
  grid-column: 1;
`;

export const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: ${({ isFirst }) => (isFirst ? '10px' : '0')};
  transition: box-shadow 0.3s ease-in-out;
  margin: auto;
  cursor: pointer;

  &:hover {
    box-shadow: ${({ isFirst }) =>
      isFirst ? '0px 0px 20px rgba(0, 0, 0, 0.3)' : 'none'};
  }

  @media (min-width: 550px) {
    width: 500px;
    height: 380px;
  }
`;

export const MoreImagesIndicator = styled.span`
  max-width: 500px;
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  font-weight: bold;
  color: white;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 5px;
  border-radius: 50%;
  cursor: pointer;
`;

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const ModalContent = styled.div`
  max-width: 90%;
  max-height: 90%;
  overflow: auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  position: relative;
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 20px;
  color: #555;
  background: none;
  border: none;
  cursor: pointer;
`;

export const ModalCloseIcon = styled.img`
  background-color: white;
  border-bottom-right-radius: 3px;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const ModalImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;

  &:not(:last-child) {
    margin-right: 20px;
  }
`;

// ----------------------------

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;
