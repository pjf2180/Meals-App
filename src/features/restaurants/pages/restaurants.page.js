import React, { useState, useContext } from "react";
import { Pressable } from "react-native";
import { RestaurantInfo } from "../components/restaurant-info.component";
import { SpacerView } from "../../../components/spacer/spacer.component";
import {
  RestaurantList,
  ErrorTextContainer,
} from "../components/restaurant-info.styles";
//Context
import { RestaurantContext } from "../../../services/restaurants/restaurant.context";
import { LocationContext } from "../../../services/location/location.context";
import { PageActivityIndicator } from "../../../components/page-activity-indicator/page-activity-indicator.component";
//Components
import { LocationSearch } from "../components/location-search.component";
import { Text } from "../../../components/typography/text.component";
import { FavoritesBar } from "../../../components/favorites/favorites-bar";
import { FavoritesContext } from "../../../services/favorites/favorites.context";

export const RestaurantsPage = ({ navigation }) => {
  const { restaurants, isLoading } = useContext(RestaurantContext);
  const { locationContextError } = useContext(LocationContext);
  const { favorites } = useContext(FavoritesContext);
  const [showFavorites, setShowFavorites] = useState(false);
  const renderRestaurant = ({ item }) => {
    return (
      <Pressable
        onPress={() =>
          navigation.navigate("restaurantDetail", { restaurant: item })
        }
      >
        <SpacerView variant="bottom.large">
          <RestaurantInfo restaurant={{ ...item }} />
        </SpacerView>
      </Pressable>
    );
  };

  return (
    <>
      <LocationSearch
        onToggle={(value) => {
          setShowFavorites(value);
        }}
      />
      {isLoading ? <PageActivityIndicator /> : null}
      {locationContextError ? (
        <ErrorTextContainer>
          <Text>{locationContextError}</Text>
        </ErrorTextContainer>
      ) : null}
      {showFavorites && (
        <FavoritesBar favorites={favorites} onNavigate={navigation.navigate} />
      )}
      {!isLoading && !locationContextError && (
        <RestaurantList
          data={restaurants}
          renderItem={renderRestaurant}
          keyExtractor={(item) => item.placeId}
        />
      )}
    </>
  );
};
