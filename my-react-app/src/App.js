import React from 'react';
import './App.css';

function App() {
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
          ></textarea>
        </section>
        <section className="app-section">
          <h2>Edit and Format</h2>
          {/* Add editing and formatting tools/components here */}
        </section>
        <section className="app-section">
          <h2>Save and Export</h2>
          {/* Add saving and exporting functionalities here */}
        </section>
      </main>
      <footer className="app-footer">
        <p>Created with ❤️ by Dannika Long</p>
      </footer>
    </div>
  );
}

export default App;
