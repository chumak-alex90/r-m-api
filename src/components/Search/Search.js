import React from "react";

const Search = ({ setSearch }) => {
  return (
    <div>
      <div className="search">
        <input
          onChange={(e) => {
            setSearch(1);
            setSearch(e.target.value);
          }}
          type="text"
          placeholder="Search"
          className="input-search"
        />
      </div>
    </div>
  );
};

export default Search;
