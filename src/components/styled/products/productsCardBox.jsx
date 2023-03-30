import styled from "styled-components";

export const ProductsCardBox = styled.div`
  width: 300px;
  margin: auto;

  &:hover {
    transform: scale(1.02);
  }
  
  @media (max-width: 330px) {
    width: 235px;

    &:hover {
    transform: none;
  } 
  }
`;