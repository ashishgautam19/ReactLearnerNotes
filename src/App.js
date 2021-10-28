import React, { useState } from 'react'
import './App.css';
import About from './components/About';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }

  let toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = '#e6ffff';
      showAlert("Light mode is on", "success")
      document.title = "Shaklaka-Light mode"
      setInterval(() => {
        document.title = "Desi-boys"
      }, 2000);
      setInterval(() => {
        document.title = "Desi-Girls"
      }, 1500);
    } else {
      setMode("dark");
      document.body.style.backgroundColor = '#00264d';
      showAlert("Dark mode is on", "success")
      document.title = "Shaklaka-Dark mode"
    }
  }
  // Creating this for change of Enabled Word ...dark to light bt can't worked!!
  // const [btxt, setbTxt] = useState("Enabled light mode");
  // let btnText = () => {
  //   if (mode == 'white') {
  //     setbTxt('Enabled dark mode')

  //   } else {
  //     setbTxt('Enabled light mode')

  //   }
  // }
  return (
    <>
      <Router>
        {/* <Navbar title={"Shaklaaka"} mode={mode} btnText={btnText} toggleMode={toggleMode} secondary={"Boom Boom"} /> */}
        <Navbar title={"Shaklaaka"} mode={mode} toggleMode={toggleMode} secondary={"Boom Boom"} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <TextForm showAlert={showAlert} heading={"Enter the Txt "} mode={mode} />
            </Route>
          </Switch>
        </div>
        <div className="container">
          {/* <About /> */}
        </div>
      </Router>

    </>
  );
}

export default App;
