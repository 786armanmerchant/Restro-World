import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";

import Header from "../components/Header";
import RestaurantItems, {
  localRestaurants,
} from "../components/RestaurantLists";
import { Divider } from "react-native-elements/dist/divider/Divider";

import SearchBar from "../components/SearchBar";

import BottomTabs from "../components/BottomTabs";


const YELP_API_KEY =
  "j75HVxTwyZSzlPmOAZSOjBp6TWzrPhUarrTesyqJ7UfrzhIYlrRJC5i_ontoH7RoMPSuM-vGZUIG433N-SIZrHoZmTE4iMKjrvecTYCKv4EvPF472f5tLwJQHPK2YXYx";

export default function Home({ navigation }) {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState("Atlanta");
  const [activeTab, setActiveTab] = useState("Delivery");

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantData(
          json.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      );
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <RestaurantItems
          restaurantData={restaurantData}
          navigation={navigation}
        />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs 
      navigation={navigation}/>
    </SafeAreaView>
  );
}
