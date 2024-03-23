import React from 'react';


const Navbar = ({ currentUser, onLoginClick, onLogoutClick }) => {

  return (

    <nav className="navbar navbar-dark bg-dark">
       <img src={`/assets/chitter_logo.png`} alt="Logo" id="logo" />

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
