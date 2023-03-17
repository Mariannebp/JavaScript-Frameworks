import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--color-primary);
  background-color: var(--color-primary);
  padding: 15px 0;
  margin: 0 0 10px 0;

  @media (max-width: 320px) {
    flex-direction: column;
  }
  `;

export default HeaderContainer;