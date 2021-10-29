import React from "react";

import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

const StyledSearchBar = styled(Searchbar)`
  width: 100%;
  padding: ${(props) => props.theme.space[3]};
  justify-content: center;
`;

export const SearchBar = ({
  value = "",
  placeholder = "",
  icon,
  onSearch,
  onChange,
  onIconPress,
}) => {
  return (
    <StyledSearchBar
      icon={icon}
      onSubmitEditing={onSearch}
      placeholder={placeholder}
      onChangeText={onChange}
      onIconPress={onIconPress}
      value={value}
    />
  );
};
