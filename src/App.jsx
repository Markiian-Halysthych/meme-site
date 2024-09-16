import MemeWindow from "./MemeWindow"
import MemeStore from "./MemeLibrary"
import React from "react"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import "./App.css"
import Heh from "./Test"
import Billy from "./assets/Billy.gif"

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
              <Link to="Meme Store">Meme Library</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<MemeWindow />} />

          <Route path="/Meme Store" element={<MemeStore />}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
