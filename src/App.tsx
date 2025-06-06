import React from "react";
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App(): React.ReactElement {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}
