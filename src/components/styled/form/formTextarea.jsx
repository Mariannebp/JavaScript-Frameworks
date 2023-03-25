import styled from "styled-components";

export const FormTextarea = styled.textarea`
  width: 350px;
  height: 150px;
  border-radius: 5px;
  border: 1px solid var(--color-border);

  @media (max-width: 480px) {
    width: 220px;
  }
  `;