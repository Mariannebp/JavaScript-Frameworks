import useCartStore from "../hooks/useCartStore";

function useCart() {
  const addProductToCart = useCartStore((state) => state.addProductToCart);
  const cart = useCartStore((state) => state.cart);
  const emptyCart = useCartStore((state) => state.emptyCart);

  function addItemToCart(id) {
    addProductToCart(id);
  }

  return {
    cart,
    addItemToCart,
    emptyCart,
  };
}

export default useCart;