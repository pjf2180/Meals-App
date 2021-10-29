import React, { createContext, useState, useEffect } from "react";
import {
  syncRestaurantsToStorage,
  retrieveRestaurantsFromStorage,
} from "./favorites.service";

export const FavoritesContext = createContext();

export const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const addToFavorites = (restaurant) => {
    setFavorites((allFaves) => [...allFaves, restaurant]);
  };
  const removeFromFavorites = (restaurant) => {
    setFavorites((allFaves) =>
      allFaves.filter((r) => r.placeId !== restaurant.placeId)
    );
  };
  useEffect(() => {
    const getSavedFavorites = async () => {
      try {
        const favoriteRestaurants = await retrieveRestaurantsFromStorage();
        console.log("R", favoriteRestaurants);
        setFavorites(favoriteRestaurants || []);
      } catch (error) {}
    };
    getSavedFavorites();
  }, []);
  useEffect(() => {
    syncRestaurantsToStorage(favorites);
  }, [favorites]);
  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
