import { mocks, mockImages } from "./mock";
import camelize from "camelize";

export const transformRestaurantsbyLocation = ({ results = [] }) => {
  const camelizedResults = camelize(results);
  return camelizedResults.map((restaurant) => {
    restaurant.photos = restaurant.photos.map((_) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });
    return {
      ...restaurant,
      isOpenNow:
        !!restaurant.openingHours && restaurant.openingHours.openNow === true,
      isClosedTemporarily: restaurant.businessStatus === "CLOSED_TEMPORARILY",
      address: restaurant.vicinity,
    };
  });
};
export const getRestaurantsByLocation = (location) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const results = mocks[location];
      if (results) {
        resolve(results);
      } else {
        reject("No results found for location");
      }
    }, 1000);
  });
};
