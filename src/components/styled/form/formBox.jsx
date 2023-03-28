import styled from "styled-components";

export const FormBox = styled.div`
  border: 1px solid var(--color-border);
  border-radius: 5px;
  background-color: var(--color-background);
  width: 520px;
  margin: auto;
  padding: 15px;
  text-align: right;

  @media (min-width: 351px) and (max-width: 700px) {
    width: 310px;
  }

  @media (max-width: 350px) {
    width: 235px;
    padding: 0;
  }
`;