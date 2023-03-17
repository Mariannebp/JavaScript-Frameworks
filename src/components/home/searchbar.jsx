import React from "react";
import FormSearch from "../styled/search/formSearch";
import SearchInput from "../styled/search/searchbar";

function SearchBar() {
  return (
    <FormSearch>
      <SearchInput type="search" id="search" placeholder="Search..." />
    </FormSearch>
  )
};

export default SearchBar;