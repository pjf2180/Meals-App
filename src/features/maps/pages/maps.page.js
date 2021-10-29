import React, { useContext, useEffect, useState } from "react";
import MapView, { Marker, Callout } from "react-native-maps";
import { StyleSheet, View, Dimensions } from "react-native";
import { LocationSearch } from "../components/location-search.component";
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantContext } from "../../../services/restaurants/restaurant.context";
import { MapCallout } from "../components/map-callout.component";
export const MapsPage = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  const { lat, lng } = location;
  const { restaurants = [] } = useContext(RestaurantContext);
  const [latDelta, setLatDelta] = useState(0);
  useEffect(() => {
    const northeastLat = location.viewport.northeast.lat;
    const southwestLat = location.viewport.southwest.lat;
    setLatDelta(northeastLat - southwestLat);
  }, [location]);
  return (
    <View style={styles.container}>
      <LocationSearch />
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          region={{
            latitude: lat,
            longitude: lng,
            latitudeDelta: latDelta,
            longitudeDelta: 0.2,
          }}
        >
          {restaurants.map((restaurant, index) => {
            const { location: restaurantLocation } = restaurant.geometry;
            return (
              <Marker
                key={index}
                coordinate={{
                  latitude: restaurantLocation.lat,
                  longitude: restaurantLocation.lng,
                }}
                title={restaurant.name}
                description={restaurant.address}
              >
                <Callout
                  onPress={() =>
                    navigation.navigate("restaurantDetail", { restaurant })
                  }
                >
                  <MapCallout restaurant={restaurant} />
                </Callout>
              </Marker>
            );
          })}
        </MapView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapContainer: {
    flex: 1,
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
