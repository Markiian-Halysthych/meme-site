import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import "./Na"


export default function NavBar(){

return(
    <Router>
        <div>
            <nav className="navbar">
                <ul className="nav-links">
                    <li>
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