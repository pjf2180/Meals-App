import AsyncStorage from "@react-native-async-storage/async-storage";

export const syncRestaurantsToStorage = async (restaurants = []) => {
  try {
    const jsonValue = JSON.stringify(restaurants);
    await AsyncStorage.setItem("@FAVORITES_RESTAURANTS", jsonValue);
  } catch (e) {
    // saving error
  }
};
export const retrieveRestaurantsFromStorage = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("@FAVORITES_RESTAURANTS");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};
