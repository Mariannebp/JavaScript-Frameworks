import styled from "styled-components";

export const FormInput = styled.input`
  padding: 5px;
  border: 1px solid var(--color-border);
  border-radius: 5px;

  @media (max-width: 350px) {
    width: 200px;
  }
`;