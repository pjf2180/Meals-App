import React, { useContext, useState } from "react";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { LoginContainer } from "../components/authentication.styles";
import { AppTextInput } from "../../../components/inputs";
import { Button } from "react-native-paper";
import { AppContainer } from "../../../components/container/app-container.component";
import { colors } from "../../../infrastructure/theme/colors";
export const LoginPage = ({ route }) => {
  const { requestLogin, isLoading } = useContext(AuthenticationContext);

  const [formState, setFormsState] = useState({
    email: route.params?.email || "",
    password: "",
  });
  const onInputChange = (key, value) =>
    setFormsState((prev) => ({ ...prev, [key]: value }));
  const handleLoginRequest = (email, password) => {
    requestLogin(email, password);
  };

  const { email, password } = formState;

  return (
    <LoginContainer>
      <AppContainer>
        <AppTextInput
          key="email"
          label="email"
          onChange={onInputChange}
          value={email}
        />
        <AppTextInput
          key="password"
          label="password"
          onChange={onInputChange}
          value={password}
          secure
        />
        <Button
          key="login-btn"
          loading={isLoading}
          color={colors.brand.primary}
          mode="contained"
          disabled={email === "" || password === ""}
          onPress={handleLoginRequest}
        >
          {isLoading ? "Loggin in..." : "Login"}
        </Button>
      </AppContainer>
    </LoginContainer>
  );
};
