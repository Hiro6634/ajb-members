import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA5CglhnTnTct8KR5gXa4rxVThy9Mkb4sQ",
    authDomain: "ajbmembers-d2638.firebaseapp.com",
    databaseURL: "https://ajbmembers-d2638-default-rtdb.firebaseio.com",
    projectId: "ajbmembers-d2638",
    storageBucket: "ajbmembers-d2638.appspot.com",
    messagingSenderId: "267832062268",
    appId: "1:267832062268:web:61882efb1a3d90f882ee39",
    measurementId: "G-DLB0G6CFH7"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`members/${userAuth.uid}`);

    const snapShot = await userRef.get();

    console.log("snapShot: ", snapShot);
    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createAt = new Date();
        try{
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            });
        } catch(error){
            console.error('error creating user ', error.message);
        }
    }
    return userRef; 
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
