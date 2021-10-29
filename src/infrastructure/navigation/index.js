import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppNavigator } from "./app.navigator";
import { AuthenticationNavigator } from "./authentication.navigator";
import { AuthenticationContext } from "../../services/authentication/authentication.context";

export const Navigation = () => {
  const { appUser } = useContext(AuthenticationContext);
  const isAuthenticated = !!appUser;
  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <AuthenticationNavigator />}
    </NavigationContainer>
  );
};
