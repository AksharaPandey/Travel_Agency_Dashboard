import { OAuthProvider } from "appwrite";
import {account} from "~/appwrite/client";
export const loginWithGoogle= async () => {
    try{
       account.createOAuth2Session(
        OAuthProvider.Google,
       )
    }catch(e){
       console.log(e); 
    }
}

export const logoutUser= async () => {
    try{

    }catch(e){
       console.log(e); 
    }
}
export const getUser= async () => {
    try{

    }catch(e){
       console.log(e); 
    }
}
export const getGooglePicture= async () => {
    try{

    }catch(e){
       console.log(e); 
    }
}
export const storeUserData= async () => {
    try{

    }catch(e){
       console.log(e); 
    }
}
export const getExistingUser= async () => {
    try{

    }catch(e){
       console.log(e); 
    }
}
