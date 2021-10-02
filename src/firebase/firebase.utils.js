import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'

const config ={
    apiKey: "AIzaSyA5CglhnTnTct8KR5gXa4rxVThy9Mkb4sQ",
    authDomain: "ajbmembers-d2638.firebaseapp.com",
    databaseURL: "https://ajbmembers-d2638-default-rtdb.firebaseio.com",
    projectId: "ajbmembers-d2638",
    storageBucket: "ajbmembers-d2638.appspot.com",
    messagingSenderId: "267832062268",
    appId: "1:267832062268:web:61882efb1a3d90f882ee39",
    measurementId: "G-DLB0G6CFH7"
};

export const createMemberProfileDocument = async (memberAuth, additionalData) => {
    if(!memberAuth) return;

    const memberRef = firestore.doc(`members/${memberAuth.uid}`);

    const snapShot = await memberRef.get();
 
    if( !snapShot.exists){
        const {displayName, email} = memberAuth;
        const createAt = new Date();

        try{
            await memberRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            })
        } catch( error){
            console.log('error creating user ', error.message);
        }
    }

    return memberRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
