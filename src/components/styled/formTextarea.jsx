import styled from "styled-components";

const FormTextarea = styled.textarea`
  width: 350px;
  height: 150px;
  border-radius: 5px;
  border: 1px solid lightgrey;

  @media (max-width: 480px) {
    width: 220px;
  }
  `;

export default FormTextarea;