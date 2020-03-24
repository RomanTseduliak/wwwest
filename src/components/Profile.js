import React from 'react';
import { NavLink } from 'react-router-dom';

const Profile = props => {
  const logout = () => {
    localStorage.removeItem('user');
    props.history.push('login');
    props.setUser({ user: null });
  };

  return (
    <div style={{
      width: 400,
      margin: 'auto',
      paddingTop: '20px',
      textAlign: 'center',
    }}>
      <h1>Here is my profile</h1>
      <button onClick={logout}>Logout</button>
      <br></br>
      <button><NavLink to="/">To the main</NavLink></button>
      <br></br>
      <button><NavLink to="news">News</NavLink></button>
    </div>
  );
};
export default Profile;
