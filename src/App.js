import React from 'react';
import Header from './components/Header';

function App() {
  const myName = 'Laura'
  const hisName = 'Rhodhi'
  const x = false

  return (
    <div className="container">
      <Header name= {myName} />
    </div>
  );
}

export default App;
