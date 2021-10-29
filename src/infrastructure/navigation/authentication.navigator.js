import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { AccountPage } from "../../features/authentication/pages/account.page";
import { LoginPage } from "../../features/authentication/pages/login.page";
import { RegisterPage } from "../../features/authentication/pages/register";

const Auth = createStackNavigator();

export const AuthenticationNavigator = () => {
  return (
    <Auth.Navigator
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
        headerMode: "none",
      }}
    >
      <Auth.Screen name="account" component={AccountPage} />
      <Auth.Screen name="login" component={LoginPage} />
      <Auth.Screen name="register" component={RegisterPage} />
    </Auth.Navigator>
  );
};
