import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// Feature pages
import { RestaurantsPage } from "./src/features/restaurants/pages/restaurants.page";
import { MapsPage } from "./src/features/maps/pages/maps.page";
import { SettingsPage } from "./src/features/settings/pages/settings.page";

import { theme } from "./src/infrastructure/theme";
import styled from "styled-components/native";
import { SafeAreaView, StatusBar } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

const StyledSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  background-color: #fff;
  ${StatusBar.currentHeight && `${StatusBar.currentHeight}px`};
`;
const Tab = createBottomTabNavigator();

export default function App() {
  const [oswaldFontLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoFontLoaded] = useLato({
    Lato_400Regular,
  });

  const loadedFonts = [oswaldFontLoaded, latoFontLoaded];
  if (!loadedFonts.every((f) => f)) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <StyledSafeAreaView>
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;

                  if (route.name === "Home") {
                    iconName = focused ? "ios-home" : "ios-home-outline";
                  } else if (route.name === "Settings") {
                    iconName = focused
                      ? "ios-settings"
                      : "ios-settings-outline";
                  } else if (route.name === "Maps") {
                    iconName = focused ? "location" : "location-outline";
                  }

                  // You can return any component that you like here!
                  return <Ionicons name={iconName} size={size} color={color} />;
                },
                // tabBarActiveTintColor: "tomato",
                // tabBarInactiveTintColor: "gray",
              })}
            >
              <Tab.Screen name="Home" component={RestaurantsPage} />
              <Tab.Screen name="Maps" component={MapsPage} />
              <Tab.Screen name="Settings" component={SettingsPage} />
            </Tab.Navigator>
          </NavigationContainer>
        </StyledSafeAreaView>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
