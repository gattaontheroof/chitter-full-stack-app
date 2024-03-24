import React from "react";
import { useState } from "react";
import AuthService from '../services/auth.service';

const RegisterForm = ({ showLogin }) => {

  const [name, setName] = useState(``);
  const [email, setEmail] = useState(``);
  const [username, setUsername] = useState(``);
  const [password, setPassword] = useState(``);
  const [registered, setRegistered] = useState(false);
  const [errorMessage, setErrorMessage] = useState(``);

  const onChangeName = e => {
    const newName = e.target.value;
    setName(newName);
  }

  const onChangeEmail = e => {
    const newEmail = e.target.value;
    setEmail(newEmail);
  }

  const onChangeUsername = e => {
    const newUsername = e.target.value;
    setUsername(newUsername);
  }

  const onChangePassword = e => {
    const newPassword = e.target.value;
    setPassword(newPassword);
  }

  const handleRegister = async e => {
    e.preventDefault();

    const register = await AuthService.register(name, username, email, password);

    if(!register.error) {
      setRegistered(true);
      setErrorMessage('');
      setName('');
      setEmail('');
      setUsername('');
      setPassword('');
    }
    else {
      setRegistered(false);
      setErrorMessage(register.error);
    }

  };

  return (

    <form onSubmit={handleRegister}>
      <div className="form-group">
        <label htmlFor="identifier">Name:</label>
        <br/>
        <input 
          type="text" 
          id="name" 
          name="name" 
          value={name} 
          onChange={onChangeName} 
          required 
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <br/>
        <input 
          type="text" 
          id="email" 
          name="email" 
          value={email} 
          onChange={onChangeEmail} 
          required 
        />
      </div>
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <br/>
        <input 
          type="text" 
          id="username" 
          name="username" 
          value={username} 
          onChange={onChangeUsername} 
          required 
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <br/>
        <input 
          type="password" 
          id="password" 
          name="password" 
          value={password} 
          onChange={onChangePassword} 
          required 
        />
      </div>
      <br/>
      <div className="form-group center-button">
        <button type="submit" className="btn btn-success">
          Register
        </button>
      </div>

      {registered && (
        <div className="form-group">
          <br/>
          <div className="alert alert-success" role="alert">
              Please <a href="#" onClick={showLogin}>Login</a> 
          </div>
        </div>
      )}

      {errorMessage && (
        <div className="form-group">
          <br/>
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        </div>
      )}
    </form>
    );
  };
  
  export default RegisterForm;