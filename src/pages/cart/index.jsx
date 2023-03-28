import React from "react";
import CartContent from "../../components/cart/cart";
import * as c from "../../components/styled/cart"

function Cart() {

  return (
    <c.CartContainer>
      <h1>Cart</h1>
      <CartContent />
    </c.CartContainer>

  )
}

export default Cart;