import React from 'react';
import '../App.css';
import NewProject from './NewProjects';
import SavedBooks from './SavedProjects';

function Home() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Welcome to Your Writing/Editing App</h1>
      </header>
      <main className="app-content">
        <NewProject />
        <SavedBooks />
      </main>

    </div>
  );
}

export default Home;
