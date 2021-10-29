import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { RestaurantsPage } from "../../features/restaurants/pages/restaurants.page";
import { RestaurantDetail } from "../../features/restaurants/pages/restaurant-detail.page";

const RestaurantsStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantsStack.Navigator
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
        headerMode: "none",
      }}
    >
      <RestaurantsStack.Screen
        name={"restaurants"}
        component={RestaurantsPage}
      />
      <RestaurantsStack.Screen
        name={"restaurantDetail"}
        component={RestaurantDetail}
      />
    </RestaurantsStack.Navigator>
  );
};
