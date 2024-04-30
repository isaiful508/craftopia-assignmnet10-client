import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, GoogleAuthProvider, GithubAuthProvider, getAuth } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase-config";



export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProviders = ({ children }) => {

    const [category, setCategory] = useState([]);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://craftopia-server-assignment10.vercel.app/craft_items")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCategory(data);
            });
    }, []);

    useEffect(() => {
        // This effect runs when category changes
        if (category.length > 0) {
            const processedItems = category.map(item => {
                const { SubCategory } = item;
                const splitSubCategory = SubCategory.split(" ");
                const joinedSubCategory = splitSubCategory.join(""); // Joining the split words without spaces
                return {
                    ...item,
                    joinedSubCategory: joinedSubCategory // Adding joinedSubCategory to the item object
                };
            });
            setItems(processedItems);
        }
    }, [category]);

    console.log(items)





    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const logIn = (email, password) => {

        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const loginWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }


    const loginWithGithub = () => {
        return signInWithPopup(auth, githubProvider);
    }




    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }





    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user in the auth state changed', currentUser);
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unSubscribe()
        }
    }, [])


    const authInfo = {
        createUser,
        user,
        loading,
        logIn,
        loginWithGoogle,
        loginWithGithub,
        logOut


    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;