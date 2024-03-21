import React, { useState } from 'react';
import AuthService from '../services/auth.service';

const LoginForm = () => {

  const [identifier, setIdentifier] = useState(``);
  const [password, setPassword] = useState(``);
  const [message, setMessage] = useState(``);

  const onChangeIdentifier = e => {
    const newIdentifier = e.target.value;
    setIdentifier(newIdentifier);
  }

  const onChangePassword = e => {
    const newPassword = e.target.value;
    setPassword(newPassword);
  }

  const handleLogin = async e => {
    e.preventDefault();
 
    const login = await AuthService.login(identifier, password);

    // set JWT placeholder

    //console.log(login);

    setMessage(login.error);
  };

  return (

    <form onSubmit={handleLogin}>
      <div className="form-group">
        <label htmlFor="identifier">Username or Email:</label>
        <br/>
        <input 
          type="text" 
          id="identifier" 
          name="identifier" 
          value={identifier} 
          onChange={onChangeIdentifier} 
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
      <div className="form-group">
        <button type="submit" className="btn btn-success">
          Login
        </button>
      </div>

      {message && (
        <div className="form-group">
          <br/>
          <div className="alert alert-danger" role="alert">
            {message}
          </div>
        </div>
      )}
    </form>
    );
  };
  
  export default LoginForm;