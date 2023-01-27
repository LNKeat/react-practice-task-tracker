import React from 'react';
import Button from "./Button";

const Header = ({title, onToggle, showForm }) => {
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button text={showForm ? 'Hide Form' : 'Add Task'} color={showForm ? 'red' : 'green'} click={onToggle} />
    </header>
  )    
} 
 
export default Header