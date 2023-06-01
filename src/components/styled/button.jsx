import styled from "styled-components";

const BasicButton = styled.button`
  margin: 10px;
  padding: 10px;
  background-color: var(--color-secondary);
  color: white;
  border: 1px solid var(--color-border);
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;

  :disabled {
    opacity: 0.8;
    cursor: default;
  }
`;

export default BasicButton;