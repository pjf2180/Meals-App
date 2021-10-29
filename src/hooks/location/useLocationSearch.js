import { useEffect, useContext } from "react";
import { LocationContext } from "../../services/location/location.context";
import { RestaurantContext } from "../../services/restaurants/restaurant.context";

export function useLocationSearch() {
  const { setLocationSearchTerm, location, locationSearchTerm } =
    useContext(LocationContext);
  const { searchRestaurants } = useContext(RestaurantContext);
  useEffect(() => {
    searchRestaurants(location);
  }, [searchRestaurants, location]);

  return { setLocationSearchTerm, locationSearchTerm };
}
