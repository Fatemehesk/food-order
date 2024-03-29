import { create } from "zustand";
export const useSingleItemStore = create((set) => ({
    mealData: {},
    getMealData: async (param) => {
    try {
      if (param) {
        const res = await fetch(
            `https://forkify-api.herokuapp.com/api/get?rId=${param}`
          );
        
        const data = await res.json();
        console.log(data);
        set({ mealData: data.recipe });
      }
    } catch (e) {
      console.log(e);
    }
  },
}));
