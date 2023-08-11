import React from 'react';

function SavedProjects({ chapters, handleChapterClick }) {
    return (
      <section className="chapter-section">
        <h3>Saved Chapters</h3>
        <ul className="chapter-list">
          {chapters && chapters.map((chapter, index) => (
            <li key={index} onClick={() => handleChapterClick(chapter)}>
              Chapter {index + 1}
            </li>
          ))}
        </ul>
      </section>
    );
  }
  

export default SavedProjects ;
