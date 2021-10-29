import React from "react";
import { RestaurantInfo } from "../components/restaurant-info.component";
import { AccordionList } from "../../../components/accordion-list/accordion-list.component";
import { ScrollView } from "react-native";
export const RestaurantDetail = ({ route }) => {
  const { restaurant } = route.params;
  return (
    <>
      <RestaurantInfo restaurant={restaurant} />
      <ScrollView>
        <AccordionList
          icon="coffee"
          listName="Breakfast"
          items={["First", "Second"]}
        />
        <AccordionList
          icon="hamburger"
          listName="Lunch"
          items={["First", "Second"]}
        />
        <AccordionList
          icon="silverware-fork-knife"
          listName="Dinner"
          items={["First", "Second", "third"]}
        />
      </ScrollView>
    </>
  );
};
