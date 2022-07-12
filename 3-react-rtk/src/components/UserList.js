import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../features/userListSlice';

function UserList() {
  const userList = useSelector((state) => state.userList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <h2>List Of Users</h2>

      {userList.loading && <h3>Loading...</h3>}
      {userList.error && <h3>{userList.error}</h3>}

      <ul>
        {userList.data?.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
