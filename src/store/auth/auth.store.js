import { create } from "zustand";
import FirebaseAuth from "./auth.firebase";

const { signInWithGoogle, handleSignOut, getCurrentUser } = FirebaseAuth;
export const useAuthState = create((set) => ({
  username: null,
  email: null,
  phoneNumber: null,
  uid: null,
  photoURL: null,
  login: () => {
    signInWithGoogle().then((res) => {
      console.log(res);
      set({
        username: res.displayName,
        email: res.email,
        phoneNumber: res.phoneNumber,
        uid: res.uid,
        photoURl: res.photoURL ? res.photoURL: null ,
      });
    });
  },
  logout: () => {
    handleSignOut().then(() => {
      set({
        username: null,
        email: null,
        phoneNumber: null,
        uid: null,
        photoURL: null,
      });
    });
  },

  authenticate: () => {
    getCurrentUser().then((currentUser) => {
      set({
        username: currentUser.displayName,
        email: currentUser.email,
        phoneNumber: currentUser.phoneNumber,
        uid: currentUser.uid,
        photoURL: currentUser.photoURl,
      });
    });
  },
}));
