import React, { useState, useEffect } from "react";
import {
  transformRestaurantsbyLocation,
  getRestaurantsByLocation,
} from "./restaurant.service";
export const DEFAULT_CONTEXT_VALUE = {
  restaurants: [
    {
      id: "restaurant-1",
      name: "Some Restaurant",
      icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
      photos: [
        "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
      ],
      address: "100 some random street",
      isOpenNow: true,
      rating: 4,
      isClosedTemporarily: true,
    },
    {
      id: "restaurant-2",
      name: "Some Restaurant",
      icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
      photos: [
        "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
      ],
      address: "100 some random street",
      isOpenNow: true,
      rating: 4,
      isClosedTemporarily: true,
    },
    {
      id: "restaurant-3",
      name: "Some Restaurant",
      icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
      photos: [
        "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
      ],
      address: "100 some random street",
      isOpenNow: true,
      rating: 4,
      isClosedTemporarily: true,
    },
  ],
};
export const RestaurantContext = React.createContext({ restaurants: [] });

export const RestaurantContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchCoordinates, searchRestaurants] = useState(null);

  useEffect(() => {
    if (!searchCoordinates) {
      return;
    }
    const fetchRestaurants = async () => {
      setIsLoading(true);
      try {
        const restaurantsByLocation = await getRestaurantsByLocation(
          `${searchCoordinates.lat},${searchCoordinates.lng}`
        );
        const transformedResults = transformRestaurantsbyLocation(
          restaurantsByLocation
        );
        setRestaurants(transformedResults);
        setIsLoading(false);
      } catch (e) {
        setError("There was a problem fetching the restaurants");
        setIsLoading(false);
      }
    };
    fetchRestaurants();
  }, [searchCoordinates]);
  return (
    <RestaurantContext.Provider
      value={{
        restaurants,
        searchRestaurants,
        isLoading,
        error,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};
