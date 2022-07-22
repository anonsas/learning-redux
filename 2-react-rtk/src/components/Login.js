import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from '../features/userSlice';

function Login() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

  function formSubmitHandler(e) {
    e.preventDefault();

    const userDetails = {
      name,
      age,
      email,
    };

    dispatch(login(userDetails));

    setName('');
    setAge('');
    setEmail('');
  }

  function resetFormHandler() {
    dispatch(logout());
  }

  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <input
          type="text"
          placeholder="Enter Name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter Age..."
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter Email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">Login</button>
        <button type="reset" onClick={resetFormHandler}>
          Reset
        </button>
      </form>
    </div>
  );
}

export default Login;
