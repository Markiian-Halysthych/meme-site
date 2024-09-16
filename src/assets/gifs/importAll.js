// src/assets/gifs/importAll.js

// Функція для динамічного імпорту файлів з розширеннями .gif, .png, .jpg
export const loadMedia = () => {
    const files = import.meta.glob('./*.{gif,png,jpg,jpeg, webp}', { eager: true });
    
    return Object.values(files).map((module) => module.default);
  };
  