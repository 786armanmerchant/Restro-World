import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import RestaurantDetail from "./screens/RestaurantDetail";
import Welcome from "./screens/Welcome";
import Info from "./screens/Info";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function RootNavigation() {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  const screenOptions = {
    headerShown: false,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={screenOptions}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Info" component={Info} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// function bottomContainer() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         initialRouteName={Home}
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color, size }) => {
//             let iconName;
//             let rn = route.name;

//             if (rn === Home) {
//               iconName = focused ? "home" : "home-outline";
//             } else if (rn === Info) {
//               iconName = focused ? "Info" : "info-outline";
//             } else if (rn === RestaurantDetail) {
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
//         <Tab.Screen name="Home" component={Home} />
//         <Tab.Screen name="Info" component={Info} />
//         <Tab.Screen name="RestaurantDetail" component={RestaurantDetail} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }
