import React from 'react';

const Button = ({ text, color, click }) => {


  return (
  <button onClick={click} style={{backgroundColor: color}} className='btn'>
    {text}
  </button>
  )
}

export default Button