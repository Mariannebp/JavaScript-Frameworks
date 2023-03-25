import { create } from 'zustand';

const useCartStore = create((set) => ({
  cart: [],
  addProductToCart: (id) => set((state) => ({ cart: [...state.cart, id] })),
  emptyCart: () => set({ cart: [] }),
}));

export default useCartStore;