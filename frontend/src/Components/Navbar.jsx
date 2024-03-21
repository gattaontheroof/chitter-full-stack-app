import React from 'react';

const Navbar = ({onLoginClick}) => {

  return (
    <nav className="navbar navbar-dark bg-dark">
      <h3>Chitter</h3> 
      <button className="btn btn-success" id="navbarButton" onClick={onLoginClick}>
        Login
      </button>
    </nav>
  );
};

export default Navbar;
