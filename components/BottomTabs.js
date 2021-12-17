import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function BottomTabs({ navigation, onPress }) {
  return (
    <View
      style={{
        flexDirection: "row",
        margin: 10,
        marginHorizontal: 30,
        justifyContent: "space-evenly",
      }}
    >
      <Icon icon="home" text="Home" />

      <Icon icon="info" text="Info" />
    </View>
  );
}

const Icon = (props, { navigation }) => (
  <TouchableOpacity>
    <View>
      <FontAwesome5
        name={props.icon}
        size={25}
        style={{
          marginBottom: 3,
          alignSelf: "center",
          color: "#61a60e",
        }}
      />
      <Text onPress={() => navigation.navigate(props.name)}>{props.text}</Text>
    </View>
  </TouchableOpacity>
);
