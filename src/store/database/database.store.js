import { create } from "zustand";
export const useDatabaseStore = create((set) => ({
  mealsLists: [],
  handleSearch: async (param) => {
    try {
      if (param) {
        const res = await fetch(
          `https://forkify-api.herokuapp.com/api/search?q=${param}`
        );
        const data = await res.json();
        set({ mealsLists: data.recipes });
      }
    } catch (e) {
      console.log(e);
    }
  },
}));
