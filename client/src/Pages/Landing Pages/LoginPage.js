import React, { useState } from 'react';



const Login = () => {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [message, setMessage] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
    
        // Perform login logic here (e.g., API call, authentication)
        if (email === 'example@example.com' && password === 'password123') {
          setMessage('Login successful!');
        } else {
          setMessage('Invalid email or password');
        }
    
        // Reset the form
        setEmail('');
        setPassword('');
      };
    
      const handleEmailChange = (event) => {
        setEmail(event.target.value);
      };
    
      const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      };


return (

    <div>
      <h2 id="page-title">Login</h2>
      <div className="homepage home-margin">

      
        <form onSubmit={handleSubmit}>

          <label htmlFor="email">Email Address</label>
          <input type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required />

          <label htmlFor="password">Password</label>
          <input type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required />

            

          <button type="submit">Login</button>
        </form>
  
        {message && <p>{message}</p>}
      </div>
    </div>

)


}

export default Login;