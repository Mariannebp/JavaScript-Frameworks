import React, { useEffect } from "react";
import * as c from "../../components/styled/checkout";

/**
 * Creates content for the checkout success page.
 */
function CheckoutSuccess() {
  useEffect(() => {
    document.title = "The One | Checkout Success";
  })

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