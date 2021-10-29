import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
// Components
import { SearchBar } from "../../../components/search-bar/search-bar.component";
import { useLocationSearch } from "../../../hooks/location/useLocationSearch";

export const LocationSearch = ({ onToggle }) => {
  const [searchQuery, setSearchQuery] = useState(locationSearchTerm);
  const [heartActive, setHeartActive] = useState(false);

  const { setLocationSearchTerm, locationSearchTerm } = useLocationSearch();
  useEffect(() => {
    setSearchQuery(locationSearchTerm);
  }, [locationSearchTerm]);

  const onChangeSearch = (query) => setSearchQuery(query);
  const onSearchSubmit = () => {
    setLocationSearchTerm(searchQuery.toLowerCase());
  };
  useEffect(() => {
    onToggle(heartActive);
  }, [heartActive, onToggle]);
  return (
    <SearchBar
      icon={heartActive ? "heart" : "heart-outline"}
      onIconPress={() => setHeartActive((prev) => !prev)}
      onSearch={onSearchSubmit}
      placeholder="Search for a city"
      onChange={onChangeSearch}
      value={searchQuery}
    />
  );
};
