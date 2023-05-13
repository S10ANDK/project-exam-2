import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 20px auto 0px;

  input,
  textarea {
    margin: 10px 0px;
    padding: 0px 10px;
  }

  input {
    height: 40px;
  }

  textarea {
    padding: 10px;
  }
`;

export const FormErrorMessage = styled.p`
  text-align: left;
  color: ${(props) => props.theme.color.secondary};
  margin: 0px 5px 10px;
`;