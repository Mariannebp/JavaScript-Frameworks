import React from "react";
import useApi from "../../components/hooks/useApi";
import url from "../../components/constants";
import Loading from "../../components/styled/loading";
import useCart from "../../components/cart/useCart";
import * as p from "../../components/styled/product"
import * as c from "../../components/styled/cart"
import BasicButton from "../../components/styled/button";
import LinkStyle from "../../components/styled/linkStyle";

function Cart() {
  const { data, isLoading, isError } = useApi(url);
  const { cart, emptyCart } = useCart();

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>Oops, something went wrong here..</div>;
  }
  console.log(cart)
  return (
    <div>
      <c.CartContainer>
        <h1>Cart</h1>
        <div>
          {cart.map((id) => {
            const item = data.find(
              (product) => product.id === id,
            );
            return cart.length > 0 ? 
              <c.CartCard key={id}>
                <c.CartImg src={item.imageUrl} />
                <h4>{item.title}</h4>
                <p>Pcs: 1</p>
                <p.ProductPrice>${item.discountedPrice}</p.ProductPrice>
              </c.CartCard>
              : "Your cart is empty";
              
            // const item = data.find(
            //   (product) => product.id === id,
            // );
            // return (
            //   <c.CartCard key={id}>
            //     <c.CartImg src={item.imageUrl} />
            //     <h4>{item.title}</h4>
            //     <p>Pcs: 1</p>
            //     <ProductPrice>${item.discountedPrice}</ProductPrice>
            //   </c.CartCard>
            // )
          })}
        </div>
        <c.CartTotal>Total Price: <p.ProductPrice>$Price</p.ProductPrice></c.CartTotal>
      </c.CartContainer>
      <LinkStyle to="/pages/checkout"><BasicButton onClick={emptyCart}>Checkout</BasicButton></LinkStyle>
    </div>
  )
}

export default Cart;