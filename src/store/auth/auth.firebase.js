* eslint-disable no-unused-vars */
import { signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../firebase";

const googleProvider = new GoogleAuthProvider()

const FirebaseAuth = {
   signInWithGoogle:() => {
    return new Promise(resolve => {
        signInWithPopup(auth, googleProvider)
        .then(response => {
            resolve(response.user);
        }) 
        .catch(console.error);
    })
}, 
   handleSignOut:  async() => {
    try {
        await signOut(auth);
        console.log("user logged out");
    } catch (error) {
        console.error(error);
    }
    },
     getCurrentUser: () => {
        return new Promise(resolve => {
            return auth.onAuthStateChanged(resolve);
        }
        )
    }
}
export default FirebaseAuth;