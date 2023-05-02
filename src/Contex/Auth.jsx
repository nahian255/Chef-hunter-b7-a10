import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from "firebase/auth";


export const newContext = createContext()

const auth = getAuth(app)
const provider = new GoogleAuthProvider();
const Gitprovider = new GithubAuthProvider();

const Auth = ({ children }) => {

    const [user, setUser] = useState({});

    // creater user function
    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Login function
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    // logOut user function
    const logOut = () => {
        return signOut(auth);
    };

    // manage user function
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (loggedInUser) => {
            setUser(loggedInUser);
        });
        return () => {
            unSubscribe();
        };
    }, []);

    // Sing in with google...
    const loginWithGoogle = () => {
        return signInWithPopup(auth, provider)
    };

    // Sing in with GitHub..
    const loginWithGithub = () => {
        return signInWithPopup(auth, Gitprovider)
    }


    const authInfo = { registerUser, user, loginUser, logOut, loginWithGoogle, loginWithGithub }
    return (
        <div>
            <newContext.Provider value={authInfo}>
                {children}
            </newContext.Provider>
        </div>
    );
};

export default Auth;