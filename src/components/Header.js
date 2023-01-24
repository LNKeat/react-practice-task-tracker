import React from 'react';
import Button from "./Button";

const Header = ({title}) => {
const click = () => {
    console.log("I was clicked")
}
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button text='Add' color='green' click={click} />
    </header>
  )    
} 
 
export default Header