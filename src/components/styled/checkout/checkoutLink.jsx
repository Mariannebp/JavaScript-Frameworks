import styled from "styled-components";
import { Link } from "react-router-dom";

export const CheckoutLink = styled(Link)`
  text-decoration: none;
  color: var(--color-secondary);
  font-size: 1.1em;

  &:hover {
    text-decoration: underline;
  }
`;