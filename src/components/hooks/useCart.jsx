import useCartStore from "./useCartStore";

/**
 * A hook that enables the cart handling functionalities. 
 */
function useCart() {
  const addProductToCart = useCartStore((state) => state.addProductToCart);
  const cart = useCartStore((state) => state.cart);
  const addOne = useCartStore((state) => state.addOne);
  const removeOne = useCartStore((state) => state.removeOne);
  const removeItemFromCart = useCartStore((state) => state.removeItemFromCart);
  const emptyCart = useCartStore((state) => state.emptyCart);

  /**
   * Function that adds an item to the cart.
   * @param {string} id - gets the id of the item thats being added to the cart.
   */
  function addItemToCart(id) {
    addProductToCart(id);
  }

  return {
    cart,
    addOne,
    removeOne,
    addItemToCart,
    removeItemFromCart,
    emptyCart,
  };
}

export default useCart;