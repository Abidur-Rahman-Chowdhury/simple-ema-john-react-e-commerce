import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handelEmailBlur = (event) => {
        setEmail(event.target.value);
      };
      const handelPasswordBlur = (event) => {
        setPassword(event.target.value);
    };
    const [
        signInWithEmailAndPassword,
        user,
        
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();

    // eslint-disable-next-line no-restricted-globals
    const from = location?.state?.from?.pathname || '/'
    const handelUserSignIn = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(email,password)

        
    }
    if (user) {
        navigate(from, {replace:true})
    }
  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Login</h2>
        <form onSubmit={handelUserSignIn}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input onBlur={handelEmailBlur} type="email" name="" id="email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input onBlur={handelPasswordBlur} type="password" name="" id="password" required />
                  </div>
                  <p style={{color: 'red'}}>
                      {error?.message}
                  </p>
          <input className="form-submit" type="submit" value="Login" />
        </form>
              <p>
                  new to Ema-John? <Link className='form-link' to='/signup'>Create an account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
