import React, { useState,useEffect } from 'react'
import { Users } from '../../../assistants/Users';


export const UserActive = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("User anonymous");
  
    useEffect(() => {
      const user = Users.find((user) => user.username === username);
      if (user) {
        if (user.password === password) {
          setMessage(`Welcome ${user.username}`);
        } else {
          setMessage("Welcome User anonymous");
        }
      } else {
        setMessage(" Welcome User anonymous");
      }
    }, [username, password]);
  
    return (
      <div>
        <h2>{message}</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
    );
  };
