import { create } from "zustand";

export const useCartStore = create((set) => ({
  items: [],
  totalAmount: 0,
  addItem: (data) => {
    set((state) => {
      const updatedTotalAmount =
        state.totalAmount + data.price * data.amount;
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === data.id
      );
      const existingCartItem = state.items[existingCartItemIndex];
      let updatedItems;
      if (existingCartItem) {
        const updatedExistItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + data.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedExistItem;
      } else {
        updatedItems = [...state.items, data];
      }
      return { items: updatedItems, totalAmount: updatedTotalAmount };
    });
  },
  removeItem: (data) => {
    set((state) => {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === data.id
      );
      if (existingCartItemIndex === -1) {
        return state; // Item not found, return current state
      }
      const existingCartItem = state.items[existingCartItemIndex];
      const updatedTotalAmount =
        state.totalAmount - existingCartItem.price * existingCartItem.amount;

      let updatedItems;
      if (existingCartItem.amount === 1) {
        updatedItems = state.items.filter((item) => item.id !== data.id);
      } else {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount - 1,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      }
      return { items: updatedItems, totalAmount: updatedTotalAmount };
    });
  },
}));
