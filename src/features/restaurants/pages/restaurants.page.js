import React from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { RestaurantInfo } from "../components/restaurant-info.component";
import { SpacerView } from "../../../components/spacer/spacer.component";
import { RestaurantList } from "../components/restaurant-info.styles";

const StyledSearchBar = styled(Searchbar)`
  width: 100%;
  padding: ${(props) => props.theme.space[3]};
  justify-content: center;
`;

export const RestaurantsPage = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [restaurants] = React.useState([
    {
      id: "restaurant-1",
      name: "Some Restaurant",
      icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
      photos: [
        "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
      ],
      address: "100 some random street",
      isOpenNow: true,
      rating: 4,
      isClosedTemporarily: true,
    },
    {
      id: "restaurant-2",
      name: "Some Restaurant",
      icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
      photos: [
        "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
      ],
      address: "100 some random street",
      isOpenNow: true,
      rating: 4,
      isClosedTemporarily: true,
    },
    {
      id: "restaurant-3",
      name: "Some Restaurant",
      icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
      photos: [
        "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
      ],
      address: "100 some random street",
      isOpenNow: true,
      rating: 4,
      isClosedTemporarily: true,
    },
  ]);

  const renderRestaurant = ({ item }) => (
    <SpacerView variant="bottom.large">
      <RestaurantInfo {...item} />
    </SpacerView>
  );
  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <>
      <StyledSearchBar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <RestaurantList
        data={restaurants}
        renderItem={renderRestaurant}
        keyExtractor={(item) => item.id}
      />
    </>
  );
};
