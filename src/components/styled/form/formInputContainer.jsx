import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 10px;
  width: 490px;

  @media (min-width: 351px) and (max-width: 700px) {
    width: 290px;
  }

  @media (max-width: 350px) {
    width: 210px;
  }
`;