import styled from "styled-components";

export const HeaderNav = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 472px) {
    flex-direction: column;
  }

  @media (max-width: 320px) {
    margin-bottom: 10px;
  }
`