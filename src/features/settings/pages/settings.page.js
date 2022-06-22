import React, { useContext } from "react";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { List, Avatar } from "react-native-paper";
import styled from "styled-components/native";
import { Text } from "../../../components/typography/text.component";
import { SpacerView } from "../../../components/spacer/spacer.component";
const SettingsListItem = styled(List.Item)`
  padding: 16px;
`;
const AvatarContainer = styled.View`
  align-items: center;
`;
export const SettingsPage = ({ navigation }) => {
  const { requestLogout } = useContext(AuthenticationContext);
  return (
    <>
      <AvatarContainer>
        <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
        <SpacerView />
        <Text variant="label">myemail@.com</Text>
      </AvatarContainer>
      <List.Section>
        <SettingsListItem
          title="Favorites"
          description="View your favorites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Home")}
        />
        <SettingsListItem
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={() => requestLogout()}
        />
      </List.Section>
    </>
  );
};
