import React from "react";

const SearchBar = (props) => {
  return (
    <div>
      <strong>Sort by:</strong>
      <form onChange={props.sort}>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sorting"
          
        />
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" name="sorting"/>
        Price
      </label>
      </form>
      <br />

      <label >
        <form onChange={props.filter}>
        <strong>Filter:</strong>
        <select onChange={null}>
        <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
        </form>
      </label>
    </div>
  );
};

export default SearchBar;
