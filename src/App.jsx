import MemeWindow from "./MemeWindow"
import MemeLibrary from "./MemeLibrary"
import React from "react"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import "./App.css"
import Heh from "./Test"

function App() {

  return (
    <Router>
      <Heh/>
      <div>
        <nav className="navbar">
          <ul className="nav-links">
            <li>
              {/* <img className="billy" src={Billy}/> */}
              <Link to="/">Meme Window</Link>
            </li>
            <li>
              <Link to="Meme Library">Meme Library</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<MemeWindow />} />

          <Route path="/Meme Library" element={<MemeLibrary />}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
