import React, {useEffect} from 'react'
import { useSignInWithGoogle,useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import {toast} from 'react-hot-toast'
import auth from '../../Firebase/firebase.config'
import {useNavigate, useLocation, Link} from 'react-router-dom'
import Loading from '../Shared/Loading'
function Login() {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const handleSignWithGoogle = () => {
        signInWithGoogle();
    }
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
      if(googleError){
          console.log('Google Err is here', googleError);
      }
      if(error){
          console.log('Email Err ', error);
      }
    if(googleUser || user){
         navigate(from, { replace: true });
    }
    const handleLoginWithEmail = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(email, password);
    }
    useEffect(() => {
        const finalError = error;
        if(finalError){
            switch(finalError?.code){
                case "auth/invalid-email":
                    toast.error("Invalid email provided, please provide a valid email");
                    break;
                
                case "auth/invalid-password":
                    toast.error("Wrong password. Intruder!!")
                    break;
                
                case "auth/user-not-found" : 
                    toast.error("User Not found Please Create New");
                    break;

                case "auth/wrong-password" : 
                    toast.error("Password is not match");
                    break;

                default:
                    toast.error("something went wrong")
            }
        }
    }, [error])
    return (
        <div>

            {
                (googleLoading || loading) && <Loading/>
            }
            <div className='w-full h-screen flex justify-center mt-[30px]'>
            <div className='container p-4  mx-auto w-[95%] max-w-[720px] shadow-lg rounded-md '>
               <form onSubmit={handleLoginWithEmail}>
               <h2 className='text-center text-xl sm:text-2xl text-blue-800 py-4  font-semibold'>LOGIN YOUR ACCOUNT </h2>
                 <label htmlFor="email" className='w-full block my-2'>Email : </label>
                <input className='py-2 px-4 w-full block my-[15px] rounded-md shadow-md' required placeholder='enter your email'  id='email' type='email' name='email'/>
                <br/>
                <label htmlFor="password">Password : </label>
                <input className='py-2 px-4 w-full block my-[15px] rounded-md shadow-md' required id='password' name='password' placeholder='enter your password' type='password' />
                <Link className='py-2 font-semibold text-blue-800' to='/reset-password'>Forgot Password</Link>
                <br/>
                 <p className='py-2 font-semibold'>Don't have an account ? <Link to='/register' className='text-blue-800'>Create new</Link></p> 
                <button className='btn block w-full my-[15px] bg-pink-800 text-white' type='submit'>Login </button><br/>
                    <div className='flex mt-[20px] px-4 mb-[10px] justify-center items-center '>
                        <div className='w-[40%] h-[2px] bg-gray-400'></div>
                        <div  clasName='w-[20%] text-center '><span className='p-[10px]'>OR</span></div>
                        <div className='w-[40%] h-[2px] bg-gray-400'></div>
                    </div>
                </form>
            <button onClick={handleSignWithGoogle} className='mb-[30px] btn bg-blue-800 w-full block text-white my-[15px]'>Sign with Google</button>
           </div>
          </div>
        </div>
    )
}

export default Login
