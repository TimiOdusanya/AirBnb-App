import React from "react";
import {Routes, Route} from "react-router-dom"
import Layout from "./components/Layout";
import Home from "./components/Layout";
import Host from "./components/Host";
import Help from "./components/Help";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="host" element={<Host />} />
          <Route path="help" element={<Help />} />
          
        </Route>
      </Routes>
    </div>
  );
}

export default App;


