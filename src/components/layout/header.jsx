import React from "react";
import { Link } from "react-router-dom";
import Nav from "./nav";
import Cart from "../../assets/icons/2703085_bag_cart_ecommerce_shop_icon.png";
import * as h from "../../components/styled/header";
import useCart from "../hooks/useCart";

function Header() {
  const { cart } = useCart();
  const totalItems = cart.reduce((accumulator, item) => accumulator + item.quantity, 0)

  return (
    <h.HeaderContainer>
      <Nav />
      <h.CartInfo>
        <Link to="/pages/cart"><h.CartIcon src={Cart} alt="Cart" /></Link>
        {cart.length > 0 ? <p>{totalItems}</p> : 0}
      </h.CartInfo>
    </h.HeaderContainer>
  )
}

export default Header;