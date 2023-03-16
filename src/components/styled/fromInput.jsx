import styled from "styled-components";

const FormInput = styled.input`
  padding: 5px;
  border: 1px solid lightgrey;
  border-radius: 5px;

  @media (max-width: 480px) {
    width: 220px;
  }
`;

export default FormInput;