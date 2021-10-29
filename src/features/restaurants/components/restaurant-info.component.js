// react / react-native
import React from "react";
import { SvgXml } from "react-native-svg";
import { Card } from "react-native-paper";
// assets
import star from "../../../../assets/star";
import open from "../../../../assets/open";
// components
import { SpacerView } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { Favorite } from "../../../components/favorites/favorite-restaurant-button";
//styles
import {
  CardContent,
  StarContainer,
  RowSectionContainer,
  IconsContainer,
  StyledIcon,
  RestaurantCard,
} from "./restaurant-info.styles";

const OpenIcon = () => {
  return <SvgXml key={"open-svg"} xml={open} width={20} height={20} />;
};

const StarsRating = ({ placeId, rating }) => {
  const starCount = Math.ceil(rating);
  const stars = Array.from(new Array(starCount));
  return (
    <StarContainer>
      {stars.map((_, idx) => (
        <SvgXml
          key={`star-${placeId}-${idx}`}
          xml={star}
          width={20}
          height={20}
        />
      ))}
    </StarContainer>
  );
};

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;
  return (
    <RestaurantCard elevation={6}>
      <Card.Cover source={{ uri: photos[0] }} />
      <Favorite restaurant={restaurant} />
      <CardContent>
        <Text variant={"label"}>{name}</Text>
        <RowSectionContainer>
          <StarsRating placeId={placeId} rating={rating} />
          <IconsContainer>
            {isClosedTemporarily && (
              <SpacerView variant={"right.medium"}>
                <Text variant={"error"}>CLOSED TEMPORARILY</Text>
              </SpacerView>
            )}
            <SpacerView variant={"right.medium"}>
              <StyledIcon source={{ uri: icon }} />
            </SpacerView>
            {isOpenNow && <OpenIcon />}
          </IconsContainer>
        </RowSectionContainer>
        <Text>{address}</Text>
      </CardContent>
    </RestaurantCard>
  );
};
