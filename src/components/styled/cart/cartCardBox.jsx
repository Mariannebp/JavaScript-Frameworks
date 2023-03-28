import styled from "styled-components";

export const CartCardBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  
  @media (max-width: 320px) {
    gap: 20px;
  }
`;