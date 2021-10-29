import React, { useState, useEffect } from "react";
// Components
import { SearchBar } from "../../../components/search-bar/search-bar.component";
import { useLocationSearch } from "../../../hooks/location/useLocationSearch";

export const LocationSearch = () => {
  //State
  const [searchQuery, setSearchQuery] = useState(locationSearchTerm);
  const { setLocationSearchTerm, locationSearchTerm } = useLocationSearch();
  useEffect(() => {
    setSearchQuery(locationSearchTerm);
  }, [locationSearchTerm]);
  // handlers
  const onChangeSearch = (query) => setSearchQuery(query);
  const onSearchSubmit = () => {
    setLocationSearchTerm(searchQuery.toLowerCase());
  };
  return (
    <SearchBar
      icon={"map"}
      onSearch={onSearchSubmit}
      placeholder="Search for a city"
      onChange={onChangeSearch}
      value={searchQuery}
    />
  );
};
