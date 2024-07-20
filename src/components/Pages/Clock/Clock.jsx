import React from 'react'
import { useState,useEffect,useRef } from 'react';

export const Clock = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
      const intervalId = setInterval(() => {
        setTime(new Date().toLocaleTimeString());
      }, 1000);
  
      return () => clearInterval(intervalId);
    }, []);
  
    return (
      <div className="clock">
          <h2>Digital Clock</h2>
        <h3>{time}</h3>
      </div>
    );
  };

