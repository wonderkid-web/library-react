import { createContext, useContext, useEffect, useState } from "react"
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile
} from "firebase/auth"

import { auth, storage } from "../firebase.js"
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"

const userAuthContext = createContext()

export const UserAuthcontextProvider = ({ children}:any) => {

    const [user, setUser] = useState()

    const signUp = (email:string, password:string) => {
         return createUserWithEmailAndPassword(auth, email, password)
         
    }

    const signIn = (email:string, password:string) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        const signInWGoogle = new GoogleAuthProvider()
        return signInWithPopup(auth, signInWGoogle)
    }

    const logOut = () => {
        return signOut(auth)
    }

    const uploadProfilePict = async (file :any, currentUser:object, setLoading:boolean, exstention:boolean) => {
        const fileRef = ref(storage, `${currentUser.uid}.${exstention}`)

        try {
            setLoading(true)
            await uploadBytes(fileRef, file)
            const photoURL = await getDownloadURL(fileRef)

            updateProfile(user, {photoURL})
            setLoading(false)
            console.log('file berhasil di upload');
            
        }catch(e){
            console.log(e.message)
        }
    }

   
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser:any) => {
            setUser(currentUser)
        })

        return () => {
            unsubscribe();
        }

    }, [])

    return (
        <userAuthContext.Provider value={{ signUp, user, logOut, signIn, googleSignIn, uploadProfilePict }}>
            {children}
        </userAuthContext.Provider>
    )
}

export const useUserAuth = () => {
    return useContext(userAuthContext)
}