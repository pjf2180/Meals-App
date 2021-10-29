import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { SpacerView } from "../spacer/spacer.component";
import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info.component";
import { Text } from "../typography/text.component";

const FavoritesWrapper = styled.View`
  padding: 5px;
  background-color: ${({ theme }) => theme.colors.bg.primaryShade};
`;
export const FavoritesBar = ({ favorites, onNavigate }) => {
  if (!favorites.length) {
    return null;
  }
  return (
    <FavoritesWrapper>
      <SpacerView variant="bottom.medium">
        <Text variant="label">Favorites</Text>
      </SpacerView>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favorites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <SpacerView key={key} variant="right.small">
              <TouchableOpacity
                onPress={() =>
                  onNavigate("restaurantDetail", {
                    restaurant,
                  })
                }
              >
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </SpacerView>
          );
        })}
      </ScrollView>
    </FavoritesWrapper>
  );
};
