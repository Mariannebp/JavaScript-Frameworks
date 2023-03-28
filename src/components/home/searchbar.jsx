import React from "react";
import * as s from "../../components/styled/search";

function SearchBar({ searchInput, onSearchInput }) {

  function onInputChange(e) {
    onSearchInput(e.currentTarget.value)
  }

  return (
    <s.FormSearch>
      <s.SearchInput type="search" id="search" placeholder="Search..." onChange={onInputChange} value={searchInput} />
    </s.FormSearch>
  )
};

export default SearchBar;