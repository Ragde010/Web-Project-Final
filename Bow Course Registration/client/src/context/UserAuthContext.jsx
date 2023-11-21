import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    updateProfile

} from 'firebase/auth'
import { auth } from '../firebase';

const UserAuthContext = createContext();

//Create a provider
export function UserAuthContextProvider({children}){
    const [user, setUser] = useState('');
    function signUp(email, password, firstname,lastname){
        return createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            // Add display name to the user profile
            return updateProfile(user, {
                firstname: firstname,
                lastname: lastname
                
                
            })
                .then(() => {
                    setUser(user);
                })
                .catch((error) => {
                    console.error("Error updating profile: ", error);
                });
        })
        .catch((error) => {
            console.error("Error creating user: ", error);
            throw error; // Rethrow the error to handle it in the component
        });
    }
    function logIn(email, password){
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logOut(){
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("Auth", currentUser)
            setUser(currentUser);
          });
          return () => {
            unsubscribe();
          }
    },[]);

    return(
        <UserAuthContext.Provider value={{
            user,
            signUp , 
            logIn,
            logOut

        }}>
            {children}
        </UserAuthContext.Provider>
    
    )
}
// create a hook of context
export function useUserAuth(){
    return useContext(UserAuthContext)
}