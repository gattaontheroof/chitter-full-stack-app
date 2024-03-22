import React from 'react';

const Navbar = ({ currentUser, onLoginClick, onLogoutClick }) => {

  return (

    <nav className="navbar navbar-dark bg-dark">
      <h3>Chitter</h3> 

      {currentUser ? (
        <button className="btn btn-success" id="navbarButton" onClick={onLogoutClick}>
          Logout
        </button>
      ) : (
        <button className="btn btn-success" id="navbarButton" onClick={onLoginClick}>
          Login
        </button>
      )} 

    </nav>

  );
};

export default Navbar;
