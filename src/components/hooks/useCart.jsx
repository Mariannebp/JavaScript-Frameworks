import useCartStore from "./useCartStore";

/**
 * A hook that enables the cart handling functionalities. 
 */
function useCart() {
  const addProductToCart = useCartStore((state) => state.addProductToCart);
  const cart = useCartStore((state) => state.cart);
  const addOne = useCartStore((state) => state.addOne);
  const removeOne = useCartStore((state) => state.removeOne);
  const emptyCart = useCartStore((state) => state.emptyCart);

  /**
   * Function that adds an item to the cart.
   * @param {string} id - gets the id of the item thats being added to the cart.
   */
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