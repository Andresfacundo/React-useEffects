import React from 'react'
import { useState, useEffect } from 'react'


export const Count = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = 'Count ' + count
  }, [count]);


  return (
    <div className='div'>
      <h1 className='h1Counter'>{count}</h1>  
      <button className='buttom' onClick={() => setCount((count) => count + 1)}>Counter </button>
    </div>
  )
};
