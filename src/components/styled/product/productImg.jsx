import styled from "styled-components";

export const ProductImg = styled.img`
  width: 400px;

  @media (min-width: 650px) and (max-width: 770px) {
    width: 300px;
  }

  @media (min-width: 440px) and (max-width: 649px) {
    width: 400px;
  }

  @media (min-width: 322px) and (max-width: 439px) {
    width: 280px;
  }

  @media (max-width: 321px) {
    width: 210px;
  }
`;