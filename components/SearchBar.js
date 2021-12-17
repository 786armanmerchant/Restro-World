import React from "react";
import { View, Text } from "react-native";
// import { GooglePlaceAutoComplete } from "react-native-google-places";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesgin from "react-native-vector-icons/AntDesign";
import { color } from "react-native-reanimated";

export default function SearchBar({ cityHandler }) {
  return (
    <View style={{ marginTop: 15, flexDirection: "row" }}>
      <GooglePlacesAutocomplete
        query={{ key: "AIzaSyBekKhbJKZEJdUWNEVjhOSqGH2hZz3YJyk" }}
        onPress={(data, details = null) => {
          console.log(data.description);
          const city = data.description.split(",")[0];
          cityHandler(city);
        }}
        placeholder="Search"
        styles={{
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 20,
            fontWeight: "700",
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
          },
        }}
        renderLeftButton={() => (
          <View style={{ marginLeft: 10 }}>
            <Ionicons name="location-sharp" size={24} color={"#61a60e"} />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              flexDirection: "row",
              marginRight: 8,
              backgroundColor: "#61a60e",
              padding: 9,
              borderRadius: 30,
              alignItems: "center",
            }}
          >
            {/* <AntDesgin name="query" size={11} style={{ marginRight: 6 }} /> */}
            <Text style={{ color: "#fff" }}>Search </Text>
          </View>
        )}
      />
    </View>
  );
}
