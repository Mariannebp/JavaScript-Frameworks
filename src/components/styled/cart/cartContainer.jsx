import styled from "styled-components";

export const CartContainer = styled.div`
  margin: 0 auto 50px auto;
  width: 522px;

  @media (min-width: 441px) and (max-width: 540px) {
    width: 422px;
  }

  @media (min-width: 340px) and (max-width: 440px) {
    width: 320px;
  }

  @media (max-width: 339px) {
    width: 232px;
  }
`;