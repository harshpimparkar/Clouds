import React from "react";


export default function Search({search, setSearch, handleSearch }) {
  return (
    <div className="search-engine">
      <input
        type="text"
        className="city-search"
        placeholder="Enter city..."
        name="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button onClick={handleSearch}>search</button>
    </div>
  );
}
