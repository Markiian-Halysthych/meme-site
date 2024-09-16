import React from "react";
import { loadMedia } from "./assets/gifs/importAll";
import "./MemeLibrary.css";

function MemeLibrary() {
    // Завантаження мемів
    const memes = loadMedia().map((media) => ({
        url: media.url,
        name: media.name,
        likes: 0
    }));

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
