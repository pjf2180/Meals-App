import React, { useState, useContext } from "react";
import { LoginContainer } from "../components/authentication.styles";
import { AppContainer } from "../../../components/container/app-container.component";
import { AppTextInput } from "../../../components/inputs";
import { Button } from "react-native-paper";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const RegisterPage = ({ navigation }) => {
  const { isLoading, requestRegistration } = useContext(AuthenticationContext);
  const [formState, setFormsState] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const onInputChange = (key, value) =>
    setFormsState((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = async () => {
    console.log("Submitting form with: ");
    console.log(formState);
    try {
      await requestRegistration(
        formState.email,
        formState.password,
        formState.confirmPassword
      );
      navigation.goBack();
      navigation.navigate("login", { email: formState.email });
    } catch (error) {
      console.log("Should show error message");
    }
  };

  const { email, password, confirmPassword } = formState;
  return (
    <LoginContainer>
      <AppContainer>
        <AppTextInput
          key="email"
          label="email"
          value={formState.email}
          keyboard="email-address"
          onChange={onInputChange}
        />
        <AppTextInput
          key="password"
          label="password"
          secure={true}
          onChange={onInputChange}
          value={password}
        />
        <AppTextInput
          key="confirmPassword"
          label="confirmPassword"
          secure={true}
          onChange={onInputChange}
          value={confirmPassword}
        />
        <Button
          key="register-btn"
          mode="contained"
          loading={isLoading}
          disabled={email === "" || password === "" || confirmPassword === ""}
          onPress={handleSubmit}
        >
          Register
        </Button>
      </AppContainer>
    </LoginContainer>
  );
};
