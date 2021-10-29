import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { MapsPage } from "../../features/maps/pages/maps.page";

const MapsStack = createStackNavigator();

export const MapsNavigator = () => {
  return (
    <MapsStack.Navigator screenOptions={{ headerMode: "none" }}>
      <MapsStack.Screen name={"maps"} component={MapsPage} />
    </MapsStack.Navigator>
  );
};
