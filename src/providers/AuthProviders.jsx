import { createUserWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from './../Firebase/firebase-config';





export const AuthContext = createContext(null);

const AuthProviders = ({ children }) => {


    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) =>{
        
        return createUserWithEmailAndPassword(auth, email, password);
    }



    useEffect( () => {
        const unSubscribe =  onAuthStateChanged(auth, currentUser => {
               console.log('user in the auth state changed', currentUser);
               setUser(currentUser);
               setLoading(false);
           })
           return () => {
               unSubscribe()
           }
       },[])


    const authInfo = {
       createUser,
        user,
        loading
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;