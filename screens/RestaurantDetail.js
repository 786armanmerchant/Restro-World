import React from "react";
import { View, Text } from "react-native";
import About from "../restaurantComponents/About";
import { Divider } from "react-native-elements/dist/divider/Divider";

import MenuItems from "../restaurantComponents/MenuItems";

export default function RestaurantDetail({ route }) {
  return (
    <View>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItems />
    </View>
  );
}
