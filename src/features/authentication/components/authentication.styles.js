import styled from "styled-components";
import { ImageBackground } from "react-native";

export const Background = styled(ImageBackground)`
  flex: 1;
  padding: ${({ theme }) => theme.space[theme.spaceSizes.large]};
`;
export const LoginContainer = styled.View`
  flex: 0.5;
  padding: ${({ theme }) => theme.space[theme.spaceSizes.medium]};
  justify-content: flex-end;
`;
export const LoginButtonSpacer = styled.View`
  flex: 0.33;
`;
export const AccountContainer = styled.View`
  max-width: 400px;
  background-color: white;
  border-radius: 6px;
  padding: ${({ theme }) => theme.space[theme.spaceSizes.large]};
`;
