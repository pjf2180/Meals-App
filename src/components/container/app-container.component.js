import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

const ContainerView = styled(View)`
  padding: ${({ theme }) => theme.space[2]};
`;

export const AppContainer = ({ children }) => {
  if (!children.length) {
    return children;
  }
  return children.map((c) => (
    <ContainerView key={`app-container-${c.key}`}>{c}</ContainerView>
  ));
};
