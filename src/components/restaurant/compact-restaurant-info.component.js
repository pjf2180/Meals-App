import React from "react";
import styled from "styled-components/native";
import { Text } from "../typography/text.component";
const StyledImage = styled.Image`
  border-radius: 6px;
  height: 120px;
  width: 120px;
`;
const InfoView = styled.View`
  align-items: center;
`;
export const CompactRestaurantInfo = ({ restaurant }) => {
  return (
    <InfoView>
      <StyledImage source={{ uri: restaurant.photos[0] }} />
      <Text>{restaurant.name}</Text>
    </InfoView>
  );
};
