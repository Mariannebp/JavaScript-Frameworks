import styled from "styled-components";
import { Link } from "react-router-dom";

export const CheckoutLink = styled(Link)`
  text-decoration: none;
  color: var(--color-primary);

  &:hover {
    text-decoration: underline;
  }
`;