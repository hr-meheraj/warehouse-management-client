import React from 'react'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import auth from '../../Firebase/firebase.config'
import {useNavigate, useLocation} from 'react-router-dom'
import Loading from '../Shared/Loading'
function Login() {
    const [signInWithGoogle, googleUser, googleLoading] = useSignInWithGoogle(auth);
    const handleSignWithGoogle = () => {
        signInWithGoogle();
    }
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    if(googleUser){
         navigate(from, { replace: true });
    }
    const handleLoginWithEmail = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log({email : email , password : password});
    }
    return (
        <div>
            {
                googleLoading && <Loading/>
            }
            <div className='container mx-auto w-[95%] max-w-[720px] '>
               <form onSubmit={handleLoginWithEmail}>
                    <input className='py-2 px-4 foucs:ring-2 focus:ring-pink-800 text-gray-300 ' placeholder='enter your email' type='email' name='email'/>
                <br/>
                <input className='py-2 px-4 foucs:ring-2 focus:ring-pink-800 text-gray-300 ' placeholder='enter your password' type='password' name='password'/>
                <br/>
                <button className='btn bg-pink-800 w-full my-[15px]' onClick={handleLoginWithEmail} type='submit'>Login </button>
                </form>

            <button onClick={handleSignWithGoogle} className='btn bg-blue-800 text-white'>Sign with Google</button>
          </div>
        </div>
    )
}

export default Login
