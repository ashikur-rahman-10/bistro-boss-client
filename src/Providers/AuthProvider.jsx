import React, { createContext, useEffect, useState } from "react";
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from "firebase/auth";
import app from "../Firebase/Firebase.init";
import axios from "axios";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // console.log(loading);
    const auth = getAuth(app);

    const googleProvider = new GoogleAuthProvider();

    // Create user with email and password

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    //User login with Email and password
    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Update User Info
    const updateUser = (name) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
        });
    };

    // Login user with google account
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    // Logout
    const logOut = () => {
        return signOut(auth);
    };

    // Use onAuthStateChanged
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);

            if (currentUser) {
                axios
                    .post(" http://localhost:5000/jwt", {
                        email: currentUser.email,
                    })
                    .then((data) => {
                        if (data.data) {
                            localStorage.setItem(
                                "access-token",
                                data.data.token
                            );
                            setLoading(false);
                        }
                    });
            } else {
                localStorage.removeItem("access-token");
            }
        });
        return () => {
            return unsubscribe();
        };
    }, []);

    const authInfo = {
        loading,
        user,
        createUser,
        updateUser,
        googleLogin,
        userLogin,
        logOut,
    };
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
