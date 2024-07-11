import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import app from '../firebase/firebase.config';
import { getAuth } from "firebase/auth";
import { useNavigate } from 'react-router-dom';


const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const auth = getAuth();
  const navigate = useNavigate('');

  const onSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
    navigate("/login");
    //console.log(userCredential)
  })
  .catch((error) => {
    //console.log(error)
  });
  };

  return (
    <div className='h-screen w-full flex items-center justify-center'>
      <section>
    <div className='heading'>
      <h1 className='text-center p-4'><strong>Register</strong></h1>
      <p className='text text-normal'>Already a User?<span><a href='/login' className='text text-links text-blue'> Login</a></span>
      </p>
      </div>
      <br/>
      <form onSubmit={onSignup}>
      <div>
      <label className='block mb-2 text-lg'>Email</label>
          <input type="email" placeholder='Enter your email' value={email} onChange={(e)=> setEmail(e.target.value)} className='field-input'>
          </input>
        </div>
        <br/>
        <div>
        <label className='block mb-2 text-lg'>Password</label>
          <input 
          type="password" 
          placeholder='Enter your password' 
          value={password} 
          onChange={(e)=> setPassword(e.target.value)} 
          required
          className='field-input'>
          </input>
        </div>
        <br/>
      <div >
      <label className='block mb-2 text-lg'>Confirm Password</label>
      <input
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
        placeholder="Confirm password"
        className='field-input'
      />
      </div>
      <br/>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <button className='bg-blue py-2 px-8 text-white' type="submit">Sign up</button>
      </div>
    </form>
    </section>
    </div>
  );
};

export default Signup;