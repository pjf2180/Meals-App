import React from "react";
import styled, { useTheme } from "styled-components";
import { View } from "react-native";
import { ActivityIndicator } from "react-native-paper";

const PageActivityIndicatorView = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const PageActivityIndicator = () => {
  const theme = useTheme();
  return (
    <PageActivityIndicatorView>
      <ActivityIndicator
        animating={true}
        color={theme.colors.brand.secondary}
      />
    </PageActivityIndicatorView>
  );
};
