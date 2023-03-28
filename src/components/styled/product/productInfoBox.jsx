import styled from "styled-components";

export const ProductInfoBox = styled.div`
  width: 300px;

  @media (min-width: 322px) and (max-width: 439px) {
    width: 280px;
  }

  @media (max-width: 321px) {
    width: 210px;
  }
`;