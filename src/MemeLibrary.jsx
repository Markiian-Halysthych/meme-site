import React, { useState, useEffect } from "react";
import { loadMedia } from "./assets/gifs/importAll";
import "./MemeLibrary.css";

function MemeLibrary() {

    const [memes, setMemes] = useState([])

    const loadLikesFromStorage = () => {
        const storedLikes = localStorage.getItem("memeLikes")
        return storedLikes ? JSON.parse(storedLikes) : {}
    }

    useEffect(() => {
       const likesFromStorage = loadLikesFromStorage();
       const loadedMemes = loadMedia().map((media) => ({
        url: media.url,
        name: media.name,
        likes: likesFromStorage[media.name] || 0,
       }))

       setMemes(loadedMemes)
    }, [])

    // Компонент картки мемів
    function MemeCard({ meme }) {
        return (
            <div className="card">
                <img src={meme.url} alt={meme.name} />
                <h2>{meme.name}</h2>
                <p>Likes: {meme.likes}</p>
            </div>
        );
    }

    return (
        <div className="cards-container">
            {memes.map((meme, index) => (
                <MemeCard key={index} meme={meme} />
            ))}
        </div>
    );
}

export default MemeLibrary;
