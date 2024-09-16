import { useState, useRef, useEffect } from "react";
import { loadMedia } from "./assets/gifs/importAll"; // Імпортуємо всі gif, png, jpg файли
import DislikeSound from "./assets/FuckUAiChan.mp3";
import LikeSound from "./assets/SocialCreditMusic.mp3";
import "./MemeWindow.css"

function MemeWindow() {
    const initialMemeArray = loadMedia().map((img) => ({
        meme: img,
        likes: 0
    }));

    const [memeArray, setMemeArray] = useState(initialMemeArray);
    const [currentIndex, setCurrentIndex] = useState(0);
    const audioRef = useRef(null);

    // Обробник події натискання клавіші
    const handleKeyDown = (event) => {
        if (event.key === "ArrowRight") {
            handleRightArrow();
        } else if (event.key === "ArrowLeft") {
            handleLeftArrow();
        }
    };

    // Додаємо обробник події при завантаженні компонента
    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);

        // Видаляємо обробник події при розмонтуванні компонента
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [currentIndex]);

    const handleLikes = () => {
        const updatedMemes = [...memeArray];
        updatedMemes[currentIndex].likes += 1;
        setMemeArray(updatedMemes);
        playSound(LikeSound);
    };

    const handleDislikes = () => {
        const updatedMemes = [...memeArray];
        updatedMemes[currentIndex].likes -= 1;
        setMemeArray(updatedMemes);
        playSound(DislikeSound);
    };

    const playSound = (sound) => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
        const audio = new Audio(sound);
        audioRef.current = audio;
        audio.play();
    };

    const handleRightArrow = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === memeArray.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handleLeftArrow = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? memeArray.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="meme-container">
            <div className="meme-window">
                <button className="arrow left" onClick={handleLeftArrow}>
                </button>
                <img className="meme" src={memeArray[currentIndex].meme} alt="meme" />
                <button className="arrow right" onClick={handleRightArrow}>
                </button>
            </div>
            <div className="counters">
                <h2>Likes: {memeArray[currentIndex].likes}</h2>
            </div>
            <div>
                <button className="like" onClick={handleLikes}>
                    Like
                </button>
                <button className="dislike" onClick={handleDislikes}>
                    Dislike
                </button>
            </div>
        </div>
    );
}

export default MemeWindow;
