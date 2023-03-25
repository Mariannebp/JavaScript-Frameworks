import React from "react";
import { Link } from "react-router-dom";
import Nav from "./nav";
import Cart from "../../assets/icons/2703085_bag_cart_ecommerce_shop_icon.png";
import * as h from "../../components/styled/header";
import useCart from "../cart/useCart";

function Header() {
  const { cart } = useCart();

  return (
    <h.HeaderContainer>
      <Nav />
      <h.CartInfo>
        <Link to="/"><h.CartIcon src={Cart} alt="Cart" /></Link>
        {cart.length > 0 ? <p>{cart.length}</p> : 0}
      </h.CartInfo>
    </h.HeaderContainer>
  )
}

export default Header;