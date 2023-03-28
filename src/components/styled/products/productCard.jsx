import styled from "styled-components";

export const ProductCard = styled.div`
  border: 1px solid var(--color-border);
  border-radius: 5px;
  text-align: center;
  width: 300px;
  margin: auto;

  @media (max-width: 330px) {
    width: 235px;
  }
`;