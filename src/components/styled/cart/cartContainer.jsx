import styled from "styled-components";

export const CartContainer = styled.div`
  margin: 0 auto auto auto;
  width: 522px;

  @media (min-width: 431px) and (max-width: 523px) {
    width: 422px;
  }

  @media (min-width: 340px) and (max-width: 430px) {
    width: 320px;
  }

  @media (max-width: 339px) {
    width: 232px;
  }
`;