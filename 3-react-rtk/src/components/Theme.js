import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeTheme } from '../features/themeSlice';

function Theme() {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const [color, setColor] = useState('');
  const [bgColor, setBgColor] = useState('');

  function changeThemeHandler() {
    const theme = { color, bgColor };
    dispatch(changeTheme(theme));
    setColor('');
    setBgColor('');
  }

  return (
    <div className="theme">
      <input
        type="text"
        placeholder="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <input
        type="text"
        placeholder="background-color "
        value={bgColor}
        onChange={(e) => setBgColor(e.target.value)}
      />
      <button onClick={changeThemeHandler}>CHANGE THEME</button>

      <div>
        <p>Selected color: {theme.color}</p>
        <p>Selected background-color: {theme.bgColor}</p>
      </div>
    </div>
  );
}

export default Theme;
