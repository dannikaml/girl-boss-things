import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';

function App() {
  const [chapters, setChapters] = useState([]);
  const [currentChapter, setCurrentChapter] = useState('');

  const handleSaveChapter = () => {
    // Implementation remains the same
  };

  const handleChapterClick = (chapter) => {
    setCurrentChapter(chapter);
  };

  return (
    <Home
      chapters={chapters}
      currentChapter={currentChapter}
      handleSaveChapter={handleSaveChapter}
      handleChapterClick={handleChapterClick}
    />
  );
}

export default App;
