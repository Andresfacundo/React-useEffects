import React, { useState,useEffect,useRef } from 'react'


export const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const intervalRef = useRef(null);

  const startTimer = () => {
    setIsActive(true);
  };

  const pauseTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setIsActive(false);
    setSeconds(0);
  };

  useEffect(() => {
    if (isActive) {
      intervalRef.current = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else if (!isActive && intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isActive]);

  useEffect(() => {
    document.title = `Seconds: ${seconds}`;
  }, [seconds]);

  return (
    <div className='boxTime'>
      <h2 className='titleTime'>Segundos: {seconds}</h2>
      <div className='boxBtn'>
      <button className='btnTime' onClick={startTimer}>Iniciar</button>
      <button className='btnTime' onClick={pauseTimer}>Pausar</button>
      <button className='btnTime' onClick={resetTimer}>Reiniciar</button>
      </div>
    </div>
  );
};
