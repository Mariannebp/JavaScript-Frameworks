import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Loading = styled.div`
  content: " ";
  width: 80px;
  height: 80px;
  margin: 50px auto;
  border-radius: 50%;
  border: 2px solid var(--color-primary);
  border-color: var(--color-primary) transparent var(--color-primary) transparent;
  animation: ${rotate} 1.5s linear infinite;
`;

export default Loading;