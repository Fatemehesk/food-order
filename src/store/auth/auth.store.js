import { create } from "zustand";
import FirebaseAuth from "./auth.firebase";

const { signInWithGoogle, handleSignOut, getCurrentUser } = FirebaseAuth;
export const useAuthState = create((set) => ({
  currUser: null,
  login: () => {
    signInWithGoogle().then((res) => {
      set({ currUser: res.displayName });
    });
  },
  logout: () => {
    handleSignOut().then(() => {
      set({ currUser: null });
    });
  },

  authenticate: () => {
    getCurrentUser().then((currentUser) => {
      set({ currUser: currentUser });
    });
  },
}));
