import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Shipment = () => {
  const [user] = useAuthState(auth);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  //   const navigate = useNavigate();

  
  const handelNameBlur = (event) => {
    setName(event.target.value);
  };
  const handelAddressBlur = (event) => {
    setAddress(event.target.value);
  };
  const handelPhoneBlur = (event) => {
    setPhone(event.target.value);
  };
  const handelCreateUser = (event) => {
      event.preventDefault();
      const shipping = { name, email, address, phone }
      console.log(shipping);

  };

  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Shipping information</h2>
        <form onSubmit={handelCreateUser}>
          <div className="input-group">
            <label htmlFor="name">Your Name</label>
            <input
              onBlur={handelNameBlur}
              type="text"
              name=""
              id="email"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Your Email</label>
            <input
              value={user?.email } readOnly
              type="email"
              name=""
              id="email"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="address">Address</label>
            <input
              onBlur={handelAddressBlur}
              type="text"
              name=""
              id="password"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="Phone">Phone Number</label>
            <input
              onBlur={handelPhoneBlur}
              type="text"
              name=""
              id="confirm-password"
              required
            />
          </div>
          <p style={{ color: 'red' }}>{error}</p>
          <input className="form-submit" type="submit" value="Add Shipping" />
        </form>
      </div>
    </div>
  );
};

export default Shipment;
