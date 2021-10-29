import React, { useContext } from "react";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { FavoritesContext } from "../../services/favorites/favorites.context";
import { TouchableOpacity } from "react-native";

const FavoriteButton = styled(TouchableOpacity)`
  position: absolute;
  right: 10px;
  top: 10px;
`;
export const Favorite = ({ restaurant }) => {
  const { favorites, addToFavorites, removeFromFavorites } =
    useContext(FavoritesContext);
  const isFavorite = !!favorites.find((x) => x.placeId === restaurant.placeId);
  const handlePress = () => {
    if (isFavorite) {
      removeFromFavorites(restaurant);
    } else {
      addToFavorites(restaurant);
    }
  };
  return (
    <FavoriteButton onPress={handlePress}>
      <AntDesign
        name={isFavorite ? "heart" : "hearto"}
        color={isFavorite ? "red" : "white"}
        size={24}
      />
    </FavoriteButton>
  );
};
