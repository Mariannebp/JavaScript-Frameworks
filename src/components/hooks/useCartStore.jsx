import { create } from 'zustand';

const useCartStore = create((set) => ({
  cart: JSON.parse(localStorage.getItem("Cart")) || [],

  addProductToCart: (id, quantity = 1) => {
    set((state) => {
      const cartItems = state.cart.findIndex((item) => item.id === id);
      const itemExists = cartItems !== -1;
      const updateCart = [...state.cart];

      if (itemExists) {
        const updateItem = {
          ...updateCart[cartItems],
          quantity: updateCart[cartItems].quantity + quantity,
        };
        updateCart.splice(cartItems, 1, updateItem);
      } else {
        updateCart.push({ id, quantity })
      }
      localStorage.setItem("Cart", JSON.stringify(updateCart));
    })
  },

  addOne: (id) => {
    set((state) => {
      const cartItems = state.cart.findIndex((item) => item.id === id);
      const updateCart = [...state.cart];

      if (cartItems !== -1) {
        const updateItem = {
          ...updateCart[cartItems],
          quantity: updateCart[cartItems].quantity + 1,
        };
        updateCart.splice(cartItems, 1, updateItem);
        localStorage.setItem("Cart", JSON.stringify(updateCart));

        return { cart: updateCart };
      }

    });
  },

  removeOne: (id) => {
    set((state) => {
      const cartItems = state.cart.findIndex((item) => item.id === id);
      const updateCart = [...state.cart];

      if (cartItems !== -1) {
        const updateItem = {
          ...updateCart[cartItems],
          quantity: Math.max(updateCart[cartItems].quantity - 1, 1),
        };
        updateCart.splice(cartItems, 1, updateItem);
        localStorage.setItem("Cart", JSON.stringify(updateCart));

        return { cart: updateCart };
      }
    });
  },

  emptyCart: () => {
    localStorage.removeItem("Cart");
    set({ cart: [] });
  },
}));


export default useCartStore;