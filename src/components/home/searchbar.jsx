import React from "react";
import FormSearch from "../styled/search/formSearch"
import SearchInput from "../styled/search/searchbar";

function SearchBar({ searchInput, onSearchInput }) {

  function onInputChange(e) {
    onSearchInput(e.currentTarget.value)
  }

  return (
    <FormSearch>
      <SearchInput type="search" id="search" placeholder="Search..." onChange={onInputChange} value={searchInput} />
    </FormSearch>
  )
};

export default SearchBar;