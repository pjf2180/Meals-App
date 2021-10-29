import React, { useState, createContext } from "react";
import { loginRequest, registerRequest } from "./authentication.service";

export const AuthenticationContext = createContext({
  appUser: null,
  authError: null,
  isLoading: false,
  requestLogin: () => {},
  requestLogout: () => {},
  requestRegistration: () => {},
});

export const AuthenticationProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authError, setAuthError] = useState(null);
  const [isLoading, setisLoading] = useState(false);

  const requestLogin = async (email, password) => {
    try {
      setisLoading(true);
      const loginRequestResult = await loginRequest(email, password);
      setUser(loginRequestResult);
      setisLoading(false);
    } catch (error) {
      setisLoading(false);
      setAuthError(error);
    }
  };
  const requestLogout = () => {
    // Do any required cleanup on other contexts, local storage etc
    setUser(null);
  };
  const requestRegistration = async (email, password, confirmPassword) => {
    try {
      setisLoading(true);
      await registerRequest(email, password, confirmPassword);
      setisLoading(false);
    } catch (error) {
      setisLoading(false);
      setAuthError(error);
      throw new Error("Registration error");
    }
  };
  return (
    <AuthenticationContext.Provider
      value={{
        appUser: user,
        authError,
        isLoading,
        requestLogin,
        requestLogout,
        requestRegistration,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
