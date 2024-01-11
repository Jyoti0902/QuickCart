import React from "react";
import '../CSScomponents/SearchBar.css';

const SearchBar = ({ setSearchTerm, handleSearch }) => {
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    handleSearch(event.target.value);
  };

  return (
    <div className="searchInput_Container">
      <input
        id="searchInput"
        type="text"
        placeholder="Search here..."
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
