import React from "react";
import { Link } from "react-router-dom";
import useCart from "../hooks/useCart";
import Nav from "./nav";
import Cart from "../../assets/icons/2703085_bag_cart_ecommerce_shop_icon.png";
import Logo from "../../assets/logo/the-one-logo.png"
import * as h from "../../components/styled/header";

/**
 * Creates and renders content of the header.
 */
function Header() {
  const { cart } = useCart();
  const totalItems = cart.reduce((accumulator, item) => accumulator + item.quantity, 0)

  return (
    <h.HeaderContainer>
      <h.HeaderNav>
        <Link to="/">
          <h.HeaderLogo src={Logo} alt="The One Logo" />
        </Link>
        <Nav />
      </h.HeaderNav>
      <div>
        <h.CartIconLink to="/pages/cart"><h.CartIcon src={Cart} alt="Cart" />{cart.length > 0 ? <h.CartIconCount>{totalItems}</h.CartIconCount> : <h.CartIconCount>0</h.CartIconCount>}</h.CartIconLink>
      </div>
    </h.HeaderContainer>
  )
}

export default Header;