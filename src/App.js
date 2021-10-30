import React, { useState } from 'react'
import './App.css';
// import About from './components/About';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

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
      document.body.style.backgroundColor = 'white';
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
      document.body.style.backgroundColor = '#323d49';
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
      {/* <Router> */}
        {/* <Navbar title={"Shaklaaka"} mode={mode} btnText={btnText} toggleMode={toggleMode} secondary={"Boom Boom"} /> */}
        <Navbar title={"Shaklaaka"} mode={mode} toggleMode={toggleMode} secondary={"Boom Boom"} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
            </Route>
          </Switch> */}
          <TextForm showAlert={showAlert} heading={"Enter the Txt "} mode={mode} />
        </div>
        {/* <div className="container">
          <About />
        </div> */}
      {/* </Router> */}

    </>
  );
}

export default App;
