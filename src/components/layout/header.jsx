import React from "react";
import { Link } from "react-router-dom";
import Nav from "./nav";
import Cart from "../../assets/icons/2703085_bag_cart_ecommerce_shop_icon.png";
import HeaderContainer from "../styled/header/headerContainer";
import CartInfo from "../styled/header/cartInfo";
import CartIcon from "../styled/header/cartIcon";

function Header() {
  return (
    <HeaderContainer>
      <Nav />
      <CartInfo>
        <Link to="/"><CartIcon src={Cart} alt="Cart" /></Link>
        <p>4</p>
      </CartInfo>
    </HeaderContainer>
  )
}

export default Header;