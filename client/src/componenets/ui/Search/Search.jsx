import React, { useState } from 'react';
import './Search.css';

export const Search = () => {
  const [ticker, setTicker] = useState('');

  const handleInputChange = (event) => {
    event.preventDefault();
    setTicker(event.target.value);
  };

  return (
    <div class="search-container">
      <form>
        <button type="submit">
          <span class="material-symbols-outlined">query_stats</span>
        </button>
        <input
          type="text"
          placeholder="Search"
          value={ticker}
          onInput={(e) => handleInputChange(e)}
        ></input>
      </form>
    </div>
  );
};
