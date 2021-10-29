import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SettingsPage } from "../../features/settings/pages/settings.page";
const SettingsStack = createStackNavigator();

export const SettingsNavigator = () => {
  return (
    <SettingsStack.Navigator screenOptions={{ headerMode: "none" }}>
      <SettingsStack.Screen name="settings" component={SettingsPage} />
    </SettingsStack.Navigator>
  );
};
