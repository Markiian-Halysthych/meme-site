// src/assets/gifs/importAll.js

// Функція для динамічного імпорту файлів з розширеннями .gif, .png, .jpg
export const loadMedia = () => {
  const files = import.meta.glob('./*.{gif,png,jpg,jpeg,webp}', { eager: true });

  return Object.keys(files).map((filePath) => {
      const fileName = filePath.split('/').pop(); // Отримуємо назву файлу
      return {
          name: fileName,
          url: files[filePath].default
      };
  });
};
