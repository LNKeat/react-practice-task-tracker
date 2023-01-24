import React from 'react'

const Header = ({name}) => {
  return (
    <header>
        <h1 style={{color: 'red', backgroundColor: 'black'}}> Task Tracker</h1>
        <h2>My name is {name}</h2>
    </header>
  ) 
} 
 
export default Header