import React from "react";

import './sign-in.styles.scss';

import { signInWithGoogle } from "../../firebase/firebase.utils";

const SignIn = () => (
    <div>
        <button onClick={signInWithGoogle} >SIGN IN</button>
    </div>
); 

export default SignIn;