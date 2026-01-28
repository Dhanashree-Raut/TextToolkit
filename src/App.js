import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar.js'
import TextArea from './components/TextArea.js'
import Alert from './components/Alert.js';
import About from './components/About.js';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

  //#region Features
  // Light and Dark mode
  const [mode , setMode] = useState('light');
  const [invertMode , setInvertMode] = useState('dark');

    // Alert message
  const [alert , setAlert] = useState(null);

  const toggleMode = () =>{
    if ("light" === mode){
      setMode("dark")
      setInvertMode("light")
      document.body.style.backgroundColor = "#002041"

      showAlert( "Enable Dark Mode." , "dark" , 3 );
      // setAlert({message: "Enable Dark Mode Successfully." , status:"dark"})
      // console.log(mode)
    }else{
      setMode("light")
      setInvertMode("dark")
      showAlert( "Enable Light Mode." , "primary" , 3 );
      
      document.body.style.backgroundColor = "white"
      // console.log(alert)
    }
  }

  const showAlert = (message , status , sec) =>{
      setAlert({message: message, status:status})

    setTimeout( () => {
      setAlert(null)
    }, sec * 1000)
  }

  //#endregion Features


  return (
    <>

     <Router>
        <Navbar mode={mode} invertMode={invertMode} navTitle="EasyText" homeTitle="Home" aboutTitle="About" toggleMode={toggleMode}
        />

        <Alert alert={alert} />

        <Routes>
          <Route
             exact path="/"
            element={
              <div className="container">
                <TextArea showAlert={showAlert} mode={mode} invertMode={invertMode} header="Enter Text"
                />
              </div>
            }
          />

          <Route exact  path="/about"  element={<About mode={mode} invertMode={invertMode} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
