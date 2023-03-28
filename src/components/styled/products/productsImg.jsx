import styled from "styled-components";

export const ProductsImg = styled.img`
  height: 300px; 
  width: 300px;
  object-fit: cover;

  @media (max-width: 330px) {
    width: 235px;
    height: 235px;
  }
`;