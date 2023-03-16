import React from "react";
import Nav from "./nav";
import Cart from "../../assets/icons/2703085_bag_cart_ecommerce_shop_icon.png"
import styled from "styled-components";
import { Link } from "react-router-dom";
import HeaderContainer from "../styled/headerContainer";

const CartInfo = styled.div`
  display: flex;
  margin-right: 10px;
  color: white;
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
`;

function Header() {
  return (
    <HeaderContainer>
      <Nav />
      <CartInfo>
        <Link to="/"><Icon src={Cart} alt="Cart" /></Link>
        <p>4</p>
      </CartInfo>
    </HeaderContainer>
  )
}

export default Header;