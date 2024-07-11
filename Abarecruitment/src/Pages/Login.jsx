import React, { useState } from 'react'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config';
import { getAuth , signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate('');

    const signIn = (e) =>{
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    navigate("/");
    //console.log(userCredential)
  })
  .catch((error) => {
    //console.log(error)
  });

    }
    const handleLogin = () => {
      signInWithPopup(auth, googleProvider).then((result) => {
       navigate("/");
        const user = result.user;
        
      }).catch((error) => {
        
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
    }
  
  return (
    <div className='h-screen w-full flex items-center justify-center'>
    <section>
      <div className='heading'>
      <h1 className='text-center p-4'>Login</h1>
      <p className='text text-normal'>New User?<span><a href='/sign-up' className='text text-links text-blue'> Create an account</a></span>
      </p>
      </div>
      <br/>
      <form onSubmit={signIn}>
        <div className='central-flex'>
          <input type="email" placeholder='Enter your email' value={email} onChange={(e)=> setEmail(e.target.value)} className='field-input'>
          </input>
        </div>
        <br/>
        <div className='central-flex'>
          <input type="password" placeholder='Enter your password' value={password} onChange={(e)=> setPassword(e.target.value)} className='field-input'>
          </input>
        </div>
        <br/>
        <br/>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <button type="submit" name='submit' className='bg-blue py-2 px-8 text-white input-submit' value="Login">Login</button>
        </div>
        
        <br/>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <button className='bg-blue py-2 px-8 text-white' onClick={handleLogin}>Signin with Google</button>
        </div>
        </form>
        </section>
    </div>
  )

}
export default Login