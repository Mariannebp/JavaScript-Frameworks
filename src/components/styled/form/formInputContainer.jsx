import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 10px;
  width: 350px;

  @media (max-width: 480px) {
    width: 230px;
    margin: 5px 0;
  }
`;

export default InputContainer;