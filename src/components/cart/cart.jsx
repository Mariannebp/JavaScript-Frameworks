import React, { useEffect } from "react";
import useApi from "../../components/hooks/useApi";
import url from "../../components/constants";
import Loading from "../../components/styled/loading";
import useCart from "../hooks/useCart";
import * as p from "../../components/styled/product"
import * as c from "../../components/styled/cart"
import BasicButton from "../../components/styled/button";
import LinkStyle from "../../components/styled/linkStyle";

/**
 * Function that creates the carts content.
 */
function CartContent() {
  const { data, isLoading, isError } = useApi(url);
  const { cart, addOne, removeOne, emptyCart } = useCart();

  useEffect(() => {
    document.title = "The One | Cart";
  })

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>Oops, something went wrong here..</div>;
  }

  /**
   * Calculates the total sum of all the products currently in the cart
   */
  const totalPrice = cart.reduce((accumulator, item) => {
    const items = data.find((thisItem) => thisItem.id === item.id);
    if (!items) {
      return accumulator;
    }
    return accumulator + item.quantity * items.discountedPrice;
  }, 0)

  return (
    <div>
      <div>
        {cart && cart.length > 0 ? (cart.map((item) => {
          const { id, quantity } = item;
          const filteredItems = data.find((currentItem) => currentItem.id === id);

          if (!filteredItems) {
            return null;
          }

          return (
            <c.CartCard key={id}>
              <c.CartCardBox>
                <c.CartImg src={filteredItems.imageUrl} alt={filteredItems.title} />
                <p>{filteredItems.title}</p>
              </c.CartCardBox>
              <c.CartCardBox2>
                <c.CartQtyContainer>
                  <c.CartAdjustButton onClick={() => removeOne(id)}>-</c.CartAdjustButton>
                  <c.CartQty>{quantity}</c.CartQty>
                  <c.CartAdjustButton onClick={() => addOne(id)}>+</c.CartAdjustButton>
                </c.CartQtyContainer>
                <p>${filteredItems.discountedPrice}</p>
              </c.CartCardBox2>

            </c.CartCard>
          )
        }))
          : <c.CartEmpty>Your cart is empty</c.CartEmpty>
        }
      </div>
      {cart && cart.length > 0 ?
        <div>
          <c.CartEmptyContainer>
            <c.CartEmptyButton onClick={emptyCart}>Empty Cart</c.CartEmptyButton>
          </c.CartEmptyContainer>
          <c.CartTotal>Total Price: <p.ProductPrice>${totalPrice.toFixed(2)}</p.ProductPrice></c.CartTotal>
          <c.CartCheckoutContainer>
            <LinkStyle to="/pages/checkout"><BasicButton onClick={emptyCart}>Checkout</BasicButton></LinkStyle>
          </c.CartCheckoutContainer>
        </div> : null
      }
    </div >
  )
}

export default CartContent;