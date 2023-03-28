import styled from "styled-components";

export const FormTextarea = styled.textarea`
  width: 490px;
  height: 150px;
  border-radius: 5px;
  border: 1px solid var(--color-border);

  @media (min-width: 351px) and (max-width: 700px) {
    width: 290px;
  }

  @media (max-width: 350px) {
    width: 210px;
  }
  `;