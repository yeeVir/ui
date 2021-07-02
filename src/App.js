import React from 'react';
// import logo from './logo.svg';
import Button from './Button';
import useColorSwitch from './useColorSwitch';
import './App.css';

function App() {
  const [state, handleButton1, handleButton2] = useColorSwitch();
  return (
    <div>
      
    </div>
  );
}

export default App;
