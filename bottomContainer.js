// import React from "react";
// import { createStackNavigator } from "@react-navigation/stack";
// import { NavigationContainer } from "@react-navigation/native";
// import Home from "./screens/Home";
// import RestaurantDetail from "./screens/RestaurantDetail";
// import Welcome from "./screens/Welcome";
// import Info from "./screens/Info";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Ionicons from "react-native-vector-icons/Ionicons";

// const Tab = createBottomTabNavigator();

// //Screen names
// const homeName = "Home";
// const infoName = "Info";
// const restaurantDetail = "RestaurantDetail";

// function bottomContainer() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         initialRouteName={Home}
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color, size }) => {
//             let iconName;
//             let rn = route.name;

//             if (rn === homeName) {
//               iconName = focused ? "home" : "home-outline";
//             } else if (rn === infoName) {
//               iconName = focused ? "Info" : "info-outline";
//             } else if (rn === restaurantDetail) {
//               iconName = focused ? "RestaurantDetail" : "settings-outline";
//             }

//             // You can return any component that you like here!
//             return <Ionicons name={iconName} size={size} color={color} />;
//           },
//         })}
//         tabBarOptions={{
//           activeTintColor: "tomato",
//           inactiveTintColor: "grey",
//           labelStyle: { paddingBottom: 10, fontSize: 10 },
//           style: { padding: 10, height: 70 },
//         }}
//       >
//         <Tab.Screen name={homeName} component={Home} />
//         <Tab.Screen name={infoName} component={Info} />
//         <Tab.Screen name={restaurantDetail} component={RestaurantDetail} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// export default bottomContainer;
