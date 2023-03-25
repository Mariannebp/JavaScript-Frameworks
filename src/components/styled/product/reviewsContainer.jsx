import styled from "styled-components";

export const ReviewsContainer = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid var(--color-border);
  border-radius: 5px;
  width: 500px;

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