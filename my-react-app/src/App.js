import React, { useState } from 'react';
import './App.css';

function App() {
  const [chapters, setChapters] = useState([]);
  const [currentChapter, setCurrentChapter] = useState('');

  const handleSaveChapter = () => {
    if (currentChapter.trim() !== '') {
      setChapters((prevChapters) => [...prevChapters, currentChapter]);
      setCurrentChapter('');
    }
  };

  const handleChapterClick = (chapter) => {
    setCurrentChapter(chapter);
  };

  const handleNewChapter = () => {
    setCurrentChapter('');
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Welcome to Your Writing/Editing App</h1>
      </header>
      <main className="app-content">
        <section className="app-section">
          <h2>Write Your Story</h2>
          <textarea
            className="text-editor"
            placeholder="Start writing here..."
            value={currentChapter}
            onChange={(e) => setCurrentChapter(e.target.value)}
          ></textarea>
          <div className="button-group">
            <button onClick={handleSaveChapter}>Save Chapter</button>
            <button onClick={handleNewChapter}>New Chapter</button>
          </div>
        </section>
        <section className="chapter-section">
          <h3>Saved Chapters</h3>
          <ul className="chapter-list">
            {chapters.map((chapter, index) => (
              <li key={index} onClick={() => handleChapterClick(chapter)}>
                Chapter {index + 1}
              </li>
            ))}
          </ul>
        </section>
      </main>
      <footer className="app-footer">
        <p>Created with ❤️ by Dannika Long</p>
      </footer>
    </div>
  );
}

export default App;
