import React, { useState } from 'react';

const LoginForm = () => {

  const [username, setUsername] = useState(``);
  const [password, setPassword] = useState(``);

  const onChangeUsername = e => {
    const newUsername = e.target.value;
    setUsername(newUsername);
}

  const onChangePassword = e => {
    const newPassword = e.target.value;
    setPassword(newPassword);
}

  const handleSubmit = (e) => {
    e.preventDefault();
 
    console.log('Call Login API placeholder..:', username, password);
  };

  return (

    <form onSubmit={handleSubmit}>
      <div>
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
      <div>
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
      <button type="submit" className="btn btn-primary">Login</button>
  </form>



  );
  };
  
  export default LoginForm;