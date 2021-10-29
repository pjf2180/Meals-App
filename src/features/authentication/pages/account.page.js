import React from "react";
import {
  AccountContainer,
  Background,
  LoginButtonSpacer,
} from "../components/authentication.styles";
import BackgroundImage from "../../../../assets/home_bg.png";
import { Button } from "react-native-paper";
import { SpacerView } from "../../../components/spacer/spacer.component";

export const AccountPage = ({ navigation }) => {
  return (
    <Background source={BackgroundImage} resizeMode="cover">
      <LoginButtonSpacer />
      <AccountContainer>
        <SpacerView variant="bottom.large" />
        <SpacerView variant="bottom.large">
          <Button mode="contained" onPress={() => navigation.navigate("login")}>
            Login
          </Button>
        </SpacerView>
        <SpacerView variant="bottom.large" />

        <Button
          mode="contained"
          onPress={() => navigation.navigate("register")}
        >
          Create Account
        </Button>
        <SpacerView variant="bottom.large" />
      </AccountContainer>
    </Background>
  );
};
