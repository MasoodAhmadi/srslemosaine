import { auth } from "./firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    sendEmailVerification,
    updatePassword,
    fetchSignInMethodsForEmail,
    getAuth
    // signInWithPopup,
    // GoogleAuthProvider,
} from "firebase/auth";

export const doCreateUserWithEmailAndPassword = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

export const doSignInWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};

export const doSignInWithGoogle = async () => {
    // const provider = new GoogleAuthProvider();
    // const result = await signInWithPopup(auth, provider);
    // const user = result.user;

    // add user to firestore
};

export const doSignOut = () => {
    return auth.signOut();
};

export const doPasswordReset = (email) => {
    return sendPasswordResetEmail(auth, email);
};

export const doPasswordChange = (password) => {
    return updatePassword(auth.currentUser, password);
};

export const doSendEmailVerification = () => {
    return sendEmailVerification(auth.currentUser, {
        url: `${window.location.origin}/`,
    });
};

export const checkIfUserExists = async (email) => {
    const auth = getAuth();
    try {
        const methods = await fetchSignInMethodsForEmail(auth, email);
        if (methods.length > 0) {
            console.log("User exists with these methods:", methods);
            return true;
        } else {
            console.log("No user found with that email.");
            return false;
        }
    } catch (error) {
        console.error("Error checking email:", error);
        return false;
    }
};