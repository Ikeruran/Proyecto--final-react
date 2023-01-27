import React, { useState } from 'react';
import './Login.css';
import PropTypes from 'prop-types';




async function loginUser(credentials) {
    return fetch('https://localhost:1443/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then((data) => {return data.json()})
   }

;

export default function Login({setToken}) {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = await loginUser({
          username,
          password
        });

        setToken(token);
      }

      

    return (
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input type="text" value={username} onChange={(e) => setUserName(e.target.value)} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}


Login.propTypes = {
  setToken: PropTypes.func.isRequired
};