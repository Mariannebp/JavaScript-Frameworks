import styled from "styled-components";

const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  transition: all 0.5s ease-in-out;
  gap: 10px;

  @media (min-width: 971px) and (max-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 641px) and (max-width: 970px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default ProductsContainer;