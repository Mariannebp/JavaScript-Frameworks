import styled from "styled-components";
import * as f from "../form";

export const SearchInput = styled(f.FormInput)`
  margin-bottom: 20px;
  padding: 10px;
  width: 300px;

  @media (max-width: 330px) {
    width: 235px;
  }
`;