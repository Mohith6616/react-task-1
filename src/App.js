import React from 'react';
import WordCounter from './WordCounter.js';
import Card from './Card.js';
import './App.css';
function App() {
  return (
    <div className="App">
      <Card>
        <h1>Responsive Paragraph Word Counter</h1>
        <WordCounter/>
      </Card>
    </div>
  );
}
export default App;