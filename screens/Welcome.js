import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
} from "react-native";
// import  LinearGradient  from "react-native-linear-gradient";
import { LinearGradient } from "expo-linear-gradient";
import { images } from "../constants";

import CustomButton from "../components/CustomButton";

const Welcome = ({ navigation }) => {
  function renderHeader() {
    return (
      <View
        style={{
          height: 700,
        }}
      >
        <ImageBackground
          source={images.login}
          style={{
            flex: 1,
            justifyContent: "flex-end",
            paddingHorizontal: 24,
          }}
          resizeMode="cover"
        >
          <Text
            style={{
              width: "80%",
              color: "#020202",
              fontSize: 45,
              fontWeight: "700",
              lineHeight: 45,
            }}
          >
            Resto World
          </Text>
        </ImageBackground>
      </View>
    );
  }

  function renderDetail() {
    return (
      <View
        style={{
          flex: 1,
          paddingHorizontal: 24,
        }}
      >
        {/* Description */}

        <Text
          style={{
            marginTop: 12,
            width: "70%",
            color: "#777777",

            fontSize: 14,
            lineHeight: 22,
          }}
        >
          Try giving your Hunger a new Option?
        </Text>

        {/* Button */}
        <View
          style={{
            flex: 1,
            justifyContent: "center",
          }}
        >
          {/* SignUp */}

          <CustomButton
            buttonText="Login"
            buttonContainerStyle={{
              paddingVertical: 18,
              borderRadius: 20,
            }}
            colors={["#61a60e", "#2AD699"]}
            onPress={() => navigation.navigate("Home")}
          />

          {/* Login */}
          <CustomButton
            buttonText="Sign Up "
            buttonContainerStyle={{
              marginTop: 12,
              paddingVertical: 18,
              borderRadius: 20,
              borderColor: "#1A8871",
              borderWidth: 1,
            }}
            colors={["#61a60e", "#2AD699"]}
            onPress={() => navigation.navigate("Home")}
          />
        </View>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      <StatusBar barStyle="light-content" />

      {/* header */}
      {renderHeader()}

      {/* detail */}
      {renderDetail()}
    </View>
  );
};

export default Welcome;
