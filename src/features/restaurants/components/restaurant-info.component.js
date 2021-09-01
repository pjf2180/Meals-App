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

const StarsRating = ({ rating }) => {
  const starCount = Math.ceil(rating);
  const stars = Array.from(new Array(starCount));
  return (
    <StarContainer>
      {stars.map((_, idx) => (
        <SvgXml key={idx.toString()} xml={star} width={20} height={20} />
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
  } = restaurant;
  return (
    <RestaurantCard>
      <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
      <CardContent>
        <Text variant={"label"}>{name}</Text>
        <RowSectionContainer>
          <StarsRating rating={rating} />
          <IconsContainer>
            {isClosedTemporarily && (
              <SpacerView variant={"right.medium"}>
                <Text variant={"error"}>CLOSED TEMPORARILY</Text>
              </SpacerView>
            )}
            <SpacerView variant={"right.medium"}>
              <StyledIcon source={{ uri: icon }} />
            </SpacerView>
            <OpenIcon />
          </IconsContainer>
        </RowSectionContainer>
        <Text>{address}</Text>
      </CardContent>
    </RestaurantCard>
  );
};
