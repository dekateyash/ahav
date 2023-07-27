import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"

import Navbar from "./components/Navbar"
import Home from "./components/pages/Home"
import Visualize from "./components/pages/Visualize"

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/visualize' element={<Visualize/>} />
      </Routes>
    </Router>
  )
}

export default App
