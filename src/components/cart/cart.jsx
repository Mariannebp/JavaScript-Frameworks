import React, { useEffect } from "react";
import useApi from "../../components/hooks/useApi";
import url from "../../components/constants";
import Loading from "../../components/styled/loading";
import useCart from "../../components/cart/useCart";
import * as p from "../../components/styled/product"
import * as c from "../../components/styled/cart"
import BasicButton from "../../components/styled/button";
import LinkStyle from "../../components/styled/linkStyle";

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

  // const storedCart = JSON.parse(localStorage.getItem("Cart"));

  const cartItems = cart.map((id) => {
    const items = data.find((currentItem) => currentItem.id === id);
    if (!items) {
      return null;
    }
    return items;
  })

  const totalPrice = cart.reduce((accumulator, item) => {
    const items = data.find((thisItem) => thisItem.id === item.id);
    if (!items) {
      return accumulator;
    }
    return accumulator + item.quantity * items.discountedPrice;
  }, 0)

  console.log(cart)
  console.log(cartItems)

  return (
    <div>
      <div>
        {cart && cart.length > 0 ? (cart.map((item) => {
          const { id, quantity } = item;
          // const filteredItems = data.find((currentItem) => currentItem.id === id);
          // const totalPrice = filteredItems.reduce((accumulator, item) => accumulator + item.quantity * item.discountedPrice, 0);
          // const filteredItems = data.find((currentItem) => currentItem.id === id);
          // const { imageUrl, title, discountedPrice } = filteredItems;

          return (
            <c.CartCard key={id}>
              {/* <c.CartImg src={imageUrl} alt={title} />
              <h4>{title}</h4> */}
              <button onClick={() => removeOne(id)}>-</button>
              <p>Qty: {quantity}</p>
              <button onClick={() => addOne(id)}>+</button>
              {/* <p.ProductPrice>{discountedPrice}</p.ProductPrice> */}
            </c.CartCard>
          )
        }))
          : <c.CartEmpty>Your cart is empty</c.CartEmpty>
        }
        <c.CartTotal>Total Price: <p.ProductPrice>${totalPrice.toFixed(2)}</p.ProductPrice></c.CartTotal>
      </div>
      <LinkStyle to="/pages/checkout"><BasicButton onClick={emptyCart}>Checkout</BasicButton></LinkStyle>
    </div >

    // <div>
    //   <c.CartContainer>
    //     {cartItems && cartItems.length > 0 ? cartItems.map((item) => (
    //       <c.CartCard key={item.id}>
    //         <c.CartImg src={item.imageUrl} alt={item.title} />
    //         <h4>{item.title}</h4>
    //         <p>Qty: {item.quantity}</p>
    //         <p.ProductPrice>{item.discountedPrice}</p.ProductPrice>
    //       </c.CartCard>
    //     )) : <c.CartEmpty>Your cart is empty</c.CartEmpty>}

    //     <c.CartTotal>Total Price: <p.ProductPrice>$Price</p.ProductPrice></c.CartTotal>
    //   </c.CartContainer>
    //   <LinkStyle to="/pages/checkout"><BasicButton onClick={emptyCart}>Checkout</BasicButton></LinkStyle>
    // </div>
  )


  // return (
  //   <div>
  //     <c.CartContainer>
  //       {cartItems && cartItems.map((item) => {
  //         return (
  //           <c.CartCard key={item.id}>
  //             <c.CartImg src={item.imageUrl} alt={item.title} />
  //             <h4>{item.title}</h4>
  //             <p>Qty: {item.count}</p>
  //             <p.ProductPrice>{item.discountedPrice}</p.ProductPrice>
  //           </c.CartCard>
  //         );
  //       })}

  //       <c.CartTotal>Total Price: <p.ProductPrice>$Price</p.ProductPrice></c.CartTotal>
  //     </c.CartContainer>
  //     <LinkStyle to="/pages/checkout"><BasicButton onClick={emptyCart}>Checkout</BasicButton></LinkStyle>
  //   </div>
  // )

  // return (
  //   <div>
  //     <c.CartContainer>
  //       <div>
  //         {cart.map((id) => {
  //           const cartItems = data.find((item) => item.id === id);
  //           console.log(cartItems)
  //           return (
  //             <c.CartCard>
  //               <c.CartImg src={cartItems.imageUrl} alt={cartItems.title} />
  //               <h4>{cartItems.title}</h4>
  //               <p>Pcs: {cartItems.length}</p>
  //               <p.ProductPrice>{cartItems.discountedPrice}</p.ProductPrice>
  //             </c.CartCard>
  //           );
  //         })}
  //       </div>
  //       <c.CartTotal>Total Price: <p.ProductPrice>$Price</p.ProductPrice></c.CartTotal>
  //     </c.CartContainer>
  //     <LinkStyle to="/pages/checkout"><BasicButton onClick={emptyCart}>Checkout</BasicButton></LinkStyle>
  //   </div>
  // )
}

export default CartContent;