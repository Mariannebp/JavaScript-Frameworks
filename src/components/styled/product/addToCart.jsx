import styled from "styled-components";

const AddToCart = styled.div`
  display: flex;
  justify-content: space-between;
  width: 250px;
  margin-top: 100px;

  @media (min-width: 322px) and (max-width: 439px) {
    margin-top: 50px;
  }

  @media (max-width: 321px) {
    display: block;
    margin-top: 30px;
    max-width: 210px;
  }
`;

export default AddToCart;