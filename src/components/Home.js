import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = props => {
  const login = () => {
    localStorage.removeItem('user');
    props.history.push('login');
    
  };

  return (
    <div
      style={{
        width: 400,
        margin: 'auto',
        paddingTop: '20px',
        textAlign: 'center'
      }}
    >
      <h1>Welcome to news feed</h1>
      
      <hr />
      <h3>
        Check this <NavLink to="news">link</NavLink> out to see more news
      </h3>
    </div>
  );
};
export default Home;
