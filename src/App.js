import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar.js'
import TextArea from './components/TextArea.js'

function App() {

  const [mode , setMode] = useState('light');
  const [invertMode , setInvertMode] = useState('dark');

  const toggleMode = () =>{
    if ("light" === mode){
      setMode("dark")
      setInvertMode("light")
      document.body.style.backgroundColor = "#002041"
      // console.log(mode)
    }else{
      setMode("light")
      setInvertMode("dark")
      document.body.style.backgroundColor = "white"
      // console.log(mode)
    }
  }
  

  return (
    <>
    <Navbar mode={mode} invertMode={invertMode} navTitle="TextTools" homeTitle="Home"  aboutTitle="About" toggleMode={toggleMode} />
    <div className="container"> 
      <TextArea mode={mode} invertMode={invertMode} header="Enter Text"/>
    </div>

    </>
  );
}

export default App;
