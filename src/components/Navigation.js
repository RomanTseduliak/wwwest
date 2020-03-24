import React from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
  color: '#418B00'
};
const stylesMenu = {
  color: '#415000',
  fontSize: 24
};
const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1 style={styles}>Check this out</h1>
        <div>
          <NavLink style={stylesMenu} to={{ pathname: '/' }} exact>
            Link
          </NavLink>
        </div>
        <div>
          <NavLink style={stylesMenu} to={{ pathname: '/news' }}>
            News
          </NavLink>
        </div>
        <div>
          <NavLink style={stylesMenu} to={{ pathname: '/profile' }}>
            Profile
          </NavLink>
        </div>
      </div>
      {/* <Route path="/" exact render={() => <h1>Home</h1>} />
      <Route path="/news" exact render={() => <h1>News</h1>} />
      <Route path="/profile" component={Profile} /> */}
    </div>
  );
};
export default Navigation;
