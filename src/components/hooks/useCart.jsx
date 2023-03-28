import useCartStore from "./useCartStore";

function useCart() {
  const addProductToCart = useCartStore((state) => state.addProductToCart);
  const cart = useCartStore((state) => state.cart);
  const addOne = useCartStore((state) => state.addOne);
  const removeOne = useCartStore((state) => state.removeOne);
  const emptyCart = useCartStore((state) => state.emptyCart);

  function addItemToCart(id) {
    addProductToCart(id);
    window.location.reload();
  }

  return {
    cart,
    addOne,
    removeOne,
    addItemToCart,
    emptyCart,
  };
}

export default useCart;