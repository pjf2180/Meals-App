import styled from "styled-components";
import { Card } from "react-native-paper";
import { View, Image, FlatList } from "react-native";

export const RestaurantCard = styled(Card)`
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;
export const RestaurantList = styled(FlatList)`
  background-color: blue;
  padding: ${({ theme }) => theme.space[1]};
`;
export const CardContent = styled(Card.Content)`
  padding: ${({ theme }) => theme.space[3]};
`;
export const StarContainer = styled(View)`
  padding-top: ${({ theme }) => theme.space[1]};
  padding-bottom: ${({ theme }) => theme.space[1]};
  flex-direction: row;
`;
export const RowSectionContainer = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`;
export const IconsContainer = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const StyledIcon = styled(Image)`
  width: ${({ theme }) => theme.sizes[1]};
  height: ${({ theme }) => theme.sizes[1]};
`;
