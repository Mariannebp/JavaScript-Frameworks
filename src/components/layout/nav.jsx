import React from "react";
import LinkStyle from "../styled/linkStyle";

/**
 * Creates the nav-bar used in the header.
 */
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