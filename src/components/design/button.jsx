import React from "react";
import styled from "styled-components";

const BasicButton = styled.button`
  margin: 10px;
  padding: 10px;
  background-color: ${(props) => props.theme.color.secondary};
  color: white;
  border: 1px solid lightgrey;
  border-radius: 5px;
`;

export default BasicButton;