import React from 'react';
import './Search.css';

export const Search = () => {
  return (
    <div class="search-container">
      <form>
        <input type="text" placeholder="Search"></input>
        <button type="submit">
          <span class="material-symbols-outlined">query_stats</span>
        </button>
      </form>
    </div>
  );
};
