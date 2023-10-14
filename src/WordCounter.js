import React, { useState } from 'react';
import './WordCounter.css';
function WordCounter() {
  const [text, setText] = useState('');
  const words = text.trim().split(/\s+/);
  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <textarea
        rows="4"
        cols="50"
        placeholder="Enter your text here..."
        value={text}
        onChange={handleTextChange}
      />
      <p>Word Count: {words.length}</p>
    </div>
  );
}
export default WordCounter;