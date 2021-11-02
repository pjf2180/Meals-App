import React from "react";
import {
  AccountContainer,
  Background,
  LoginButtonSpacer,
} from "../components/authentication.styles";
import BackgroundImage from "../../../../assets/home_bg.png";
import { Button } from "react-native-paper";
import { SpacerView } from "../../../components/spacer/spacer.component";
import { colors } from "../../../infrastructure/theme/colors";

export const AccountPage = ({ navigation }) => {
  return (
    <Background source={BackgroundImage} resizeMode="cover">
      <LoginButtonSpacer />
      <AccountContainer>
        <SpacerView variant="bottom.large" />
        <SpacerView variant="bottom.large">
          <Button
            mode="contained"
            color={colors.brand.primary}
            onPress={() => navigation.navigate("login")}
          >
            Login
          </Button>
        </SpacerView>
        <SpacerView variant="bottom.large" />

        <Button
          mode="contained"
          color={colors.brand.primary}
          onPress={() => navigation.navigate("register")}
        >
          Create Account
        </Button>
        <SpacerView variant="bottom.large" />
      </AccountContainer>
    </Background>
  );
};
