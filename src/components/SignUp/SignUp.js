import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './SignUp.css';
import auth from '../../firebase.init';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassowrd, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, hookError, user] =
    useCreateUserWithEmailAndPassword(auth);
  const handelEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handelPasswordBlur = (event) => {
    setPassword(event.target.value);
  };
  const handelConfirmPasswordBlur = (event) => {
    setConfirmPassword(event.target.value);
  };

  if (user) {
    navigate('/');
  }
  const handelCreateUser = (event) => {
    event.preventDefault();
    if (password !== confirmPassowrd) {
      setError('Password didnt match');
      return;
    }
    if (password.length < 6) {
      setError('Password must be 6 Characters or longer');
      return;
    }
    createUserWithEmailAndPassword(email, password);
  };
  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">SignUp</h2>
        <form onSubmit={handelCreateUser}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              onBlur={handelEmailBlur}
              type="email"
              name=""
              id="email"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              onBlur={handelPasswordBlur}
              type="password"
              name=""
              id="password"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              onBlur={handelConfirmPasswordBlur}
              type="password"
              name=""
              id="confirm-password"
              required
            />
          </div>
          <p style={{ color: 'red' }}>{error || hookError}</p>
          <input className="form-submit" type="submit" value="Sign Up" />
        </form>
        <p>
          Already have an account?
          <Link className="form-link" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
