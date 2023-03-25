import React from "react";
import * as c from "../../components/styled/checkout";

function CheckoutSuccess() {
  return (
    <c.CheckoutContainer>
      <h1>Checkout Successful!</h1> 
      <p>Thank your for shopping with us</p>
      <br />
      <c.CheckoutLink to="/" >Continue Shopping</c.CheckoutLink>
    </c.CheckoutContainer>
  )
}

export default CheckoutSuccess;