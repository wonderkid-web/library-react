import { createContext, useContext, useEffect, useState } from "react"
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    signInWithPopup, 
    signOut
} from "firebase/auth"

import { auth } from "../firebase.js"

const userAuthContext = createContext()

export const UserAuthcontextProvider = ({ children }) => {

    const [user, setUser] = useState()

    const signUp = () => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = () => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        const signInWGoogle = new GoogleAuthProvider()
        return signInWithPopup(auth, signInWGoogle)
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })

        return () => {
            unsubscribe();
        }

    }, [])

    return (
        <userAuthContext.Provider value={{ signUp, user, logOut, signIn, googleSignIn }}>
            {children}
        </userAuthContext.Provider>
    )
}

export const useUserAuth = () => {
    return useContext(userAuthContext)
}