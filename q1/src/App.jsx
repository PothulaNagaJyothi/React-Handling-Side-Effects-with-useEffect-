import React from 'react';
import UserData from './components/UserData';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Data Fetching Task</h1>
      </header>
      <main>
        <UserData />
      </main>
    </div>
  );
}

export default App;