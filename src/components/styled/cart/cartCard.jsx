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
  width: 400px;

  @media (min-width: 321px) and (max-width: 430px) {
    width: 300px;
  }

  @media (max-width: 320px) {
    grid-template-columns: none;
    grid-template-rows: 1fr 1fr;
    width: 220px;
  }
`;