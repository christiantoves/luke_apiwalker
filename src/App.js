import Form from "./components/Form"
import Display from "./components/Display"
import React, {useState} from "react";
import {Router} from "@reach/router"

function App() {
  return (
    <div className="App">
      <Form />
      <Router>
        <Display path = "/:category/:id" />
      </Router>
    </div>
  );
}

export default App;
