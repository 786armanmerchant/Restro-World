import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";

const foods = [
  {
    title: "Dal Makhani",
    description:
      "Fresh small dark brown lentils cooked delicately in a curry sauce. Served mild, medium, or hot to your taste. Getting fresh.",
    price: "$7.95",
    image:
      "https://d1ralsognjng37.cloudfront.net/5b655529-ab27-46df-a56a-2f214362e934.jpeg",
  },
  {
    title: "Chicken Biryani",
    description:
      "Tender pieces of fresh boneless chicken breast slowly cooked with long grain basmati rice and fresh curry spices.",
    price: "$13.95",
    image:
      "https://d1ralsognjng37.cloudfront.net/33fcf79e-9ad8-48bb-b035-8c6e17944220.jpeg",
  },
  {
    title: "Veg Thali",
    description:
      "Veggie thali with two veggies, raita, rice, salad and a dessert in it. Comes with naan/roti",
    price: "$14.50",
    image:
      "https://d1ralsognjng37.cloudfront.net/6a63219c-35da-4488-b2c8-e7300d18bef0.jpeg",
  },
  {
    title: "Chana Bhatura",
    description:
      "Per plate. Chick peas soaked overnight in water and freshly cooked with curry spices. Served with two crispy and deep fried bhatura.",
    price: "$8.95",
    image:
      "https://d1ralsognjng37.cloudfront.net/2ed9db88-f6f6-4b77-9f8a-1c0b73c85552.jpeg",
  },
  {
    title: "Bhel Puri",
    description:
      "Per plate. Combustion of rice, onion, and peanuts in a tamarind sauce.",
    price: "$7.65",
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC81YTQ0NTk4ZC1mZTgxLTQwMmUtYTNmZS1kNWJlZDdkOThiZmYuanBlZw==",
  },
];

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },

  titleStyle: {
    fontSize: 19,
    fontWeight: "600",
  },
});

export default function MenuItems() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index) => (
        <View key={index}>
          <View style={styles.menuItemStyle}>
            <FoodInfo food={food} />

            <FoodImage food={food} />
          </View>
          <Divider
            width={0.5}
            orientation="vertical"
            style={{ marginHorizontal: 20 }}
          />
        </View>
      ))}
    </ScrollView>
  );
}

const FoodInfo = (props) => (
  <View style={{ width: 240, justifyContent: "space-evenly" }}>
    <Text style={styles.titleStyle}>{props.food.title}</Text>
    <Text>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
);

const FoodImage = (props) => (
  <View>
    <Image
      source={{ uri: props.food.image }}
      style={{ width: 100, height: 100, borderRadius: 8 }}
    />
  </View>
);
