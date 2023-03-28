import styled from "styled-components";

export const ProductInfo = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 30px;
  margin: 50px auto 70px auto;

  @media (min-width: 420px) and (max-width: 649px) {
    grid-template-columns: none;
    grid-template-rows: 1fr;
    width: 400px;
  }

  @media (min-width: 322px) and (max-width: 439px) {
    grid-template-columns: none;
    grid-template-rows: 1fr;
    row-gap: 30px;
    width: 280px;
  }

  @media (max-width: 321px) {
    grid-template-columns: none;
    grid-template-rows: 1fr;
    row-gap: 30px;
    width: 210px;
  }
`;