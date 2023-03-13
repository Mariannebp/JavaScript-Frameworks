import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkStyle = styled(Link)`
    margin: 10px;
    font-size: 1.1em;
    font-weight: 600;
    color: white;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;

function Nav() {
  return (
    <div>
      <LinkStyle to="/">Home</LinkStyle>
      <LinkStyle to="/pages/cart">Cart</LinkStyle>
      <LinkStyle to="/pages/contact">Contact</LinkStyle>
    </div>
  )
}

export default Nav;