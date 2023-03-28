import styled from "styled-components";

export const CartCard = styled.div`
  display: grid;
  grid-template-columns: 1.7fr 1fr;
  gap: 15px;
  align-items: center;
  justify-items: start;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid var(--color-border);
  border-radius: 5px;
  background-color: var(--color-background);
  width: 500px;

  @media (min-width: 431px) and (max-width: 523px) {
    width: 400px;
  }

  @media (min-width: 340px) and (max-width: 430px) {
    grid-template-columns: none;
    grid-template-rows: 1fr 1fr;
    gap: 5px;
    width: 298px;
  }

  @media (max-width: 339px) {
    grid-template-columns: none;
    grid-template-rows: 1fr 1fr;
    width: 210px;
  }
`;