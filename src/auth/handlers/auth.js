/* eslint-disable no-unused-vars */
import { signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../firebase";

const googleProvider = new GoogleAuthProvider()

const FirebaseAuth = {
   signInWithGoogle:async () => {
        try {
        const res=  await signInWithPopup(auth, googleProvider);
        } catch (error) {
          console.error("Error signing in with Google:", error);
        }
      },
   handleSignOut:  () => {
        signOut(auth)
        .then(() => console.log("user logged out"))
        .catch(console.error)
    },
     getCurrentUser: () => {
        return new Promise(resolve => {
            return auth.onAuthStateChanged(resolve)
        }
        )
    }
}
export default FirebaseAuth;
//     getCurrentUser: () => {
//         return new Promise(resolve => {
//             return auth.onAuthStateChanged(resolve)
//         })
//     }
// }
// export default FirebaseAuth