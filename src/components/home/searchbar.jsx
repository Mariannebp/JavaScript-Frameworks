import React from "react";
import * as s from "../../components/styled/search";

/**
 * Creates the search bar used on the home page.
 * @param {string} props - to get the useState for SearchInput and setSearchInput from the Products function where this function is called.
 */
function SearchBar({ searchInput, onSearchInput }) {

  /**
   * Function that handles changes on search input 
   * @param {string} e - input information
   */
  function onInputChange(e) {
    e.preventDefault();
    onSearchInput(e.currentTarget.value)
  }

  return (
    <s.FormSearch>
      <s.SearchInput type="search" id="search" placeholder="Search..." onChange={onInputChange} value={searchInput} />
    </s.FormSearch>
  )
};

export default SearchBar;