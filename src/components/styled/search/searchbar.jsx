import styled from "styled-components";
import FormInput from "../form/fromInput";

const SearchInput = styled(FormInput)`
  margin-bottom: 20px;
  padding: 10px;
  width: 300px;

  @media (max-width: 330px) {
    width: 235px;
  }
`;

export default SearchInput;