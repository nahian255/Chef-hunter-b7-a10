import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const newContext = createContext()

const auth = getAuth(app)

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


    const authInfo = { registerUser, user, loginUser, logOut }
    return (
        <div>
            <newContext.Provider value={authInfo}>
                {children}
            </newContext.Provider>
        </div>
    );
};

export default Auth;