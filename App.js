import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { SafeAreaView, StatusBar } from "react-native";

// Context Providers
import { RestaurantContextProvider } from "./src/services/restaurants/restaurant.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavoritesContextProvider } from "./src/services/favorites/favorites.context";
import { AuthenticationProvider } from "./src/services/authentication/authentication.context";

import { theme } from "./src/infrastructure/theme";
import styled from "styled-components/native";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { Navigation } from "./src/infrastructure/navigation";

const StyledSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  background-color: #fff;
  ${StatusBar.currentHeight && `${StatusBar.currentHeight}px`};
`;

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
        <AuthenticationProvider>
          <RestaurantContextProvider>
            <LocationContextProvider>
              <FavoritesContextProvider>
                <StyledSafeAreaView>
                  <Navigation />
                </StyledSafeAreaView>
              </FavoritesContextProvider>
            </LocationContextProvider>
          </RestaurantContextProvider>
        </AuthenticationProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
