import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProductsLink = styled(Link)`
  text-decoration: none;
  width: 300px;
  margin: auto;

  &:hover {
    transform: scale(1.01);
  }
  
  @media (max-width: 330px) {
    width: 235px;
  }
`;