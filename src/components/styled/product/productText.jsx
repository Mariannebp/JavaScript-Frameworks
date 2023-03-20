import styled from "styled-components";

const ProductText = styled.p`
  margin: 5px 0 0 0;
  max-width: 300px;

  @media (min-width: 322px) and (max-width: 439px) {
    width: 280px;
  }

  @media (max-width: 321px) {
    width: 210px;
  }
`;

export default ProductText;