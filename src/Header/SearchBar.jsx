// SearchBar.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchBar({onClose}) {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    navigate(`/search?q=${searchQuery}`);
    onClose();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      navigate(`/search?q=${searchQuery}`);
      onClose();
    }
  };

  return (
    <div className='searchbar-section'>
      <div className="searchbar-container">
        <div className="search-bar">
          <input
            type="search"
            placeholder='Search..'
            value={searchQuery}
            onChange={handleSearchChange}
            onKeyDown={handleKeyDown}
          />
        </div>
        <button className='search-btn' onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
}

export default SearchBar;
