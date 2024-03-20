import React from 'react';

const Navbar = ({onLoginClick}) => {

  return (
    <nav className="navbar navbar-light bg-light">
      <h3>Chitter</h3> 
      <button className="btn btn-outline-primary my-2 my-sm-0" onClick={onLoginClick}>
        Login
      </button>
    </nav>
  );
};

export default Navbar;
