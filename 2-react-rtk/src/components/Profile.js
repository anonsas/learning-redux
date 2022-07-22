import React from 'react';
import { useSelector } from 'react-redux';

function Profile() {
  const user = useSelector((state) => state.user);
  const { name, age, email } = user;

  return (
    <div>
      <h1>Profile Page</h1>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
}

export default Profile;
