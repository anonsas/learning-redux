import Profile from './components/Profile';
import Login from './components/Login';
import Theme from './components/Theme';
import UserList from './components/UserList';
import { useSelector } from 'react-redux';

function App() {
  const theme = useSelector((state) => state.theme);

  return (
    <div
      className="App"
      style={{ color: `${theme.color}`, backgroundColor: `${theme.bgColor}` }}
    >
      <Profile />
      <Login />
      <Theme />
      <UserList />
    </div>
  );
}

export default App;
