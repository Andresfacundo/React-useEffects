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
          setMessage(`Bienvenido ${user.username}`);
        } else {
          setMessage("Bienvenido usuario anonimo");
        }
      } else {
        setMessage(" Bienvenido usuario anonimo ");
      }
    }, [username, password]);
  
    return (
      <div className='boxLogin'>
        <h2 className='loginTitle'>{message}</h2>
        <div className='containerInput'>
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
      </div>
    );
  };
