import React, { useEffect, useState } from "react";
import { store } from "./src/redux/store/store";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Catalog from "./src/components/Catalog";
import Checkout from "./src/components/Checkout";
import Home from "./src/components/Home";
import Orders from "./src/components/Orders";
import Receipt from "./src/components/Receipt";
import Customers from "./src/components/Customer";
import Setting from "./src/components/setting";
import Products from "./src/components/Products";
import Adduser from "./src/components/Adduser";
import ProductPage from "./src/components/ProductPage/ProductPage";
import getAllProducts from "./src/components/getAllProducts";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const HomeScreen = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Adduser" component={Adduser} />
    <Stack.Screen name="Checkout" component={Checkout} />
  </Stack.Navigator>
);


const SettingScreen = () => (
  <Stack.Navigator screenOptions={{
    headerShown: true, // Hide default header
  }}>
    <Stack.Screen name="setting" component={Setting} />
    <Stack.Screen name="Customers" component={Customers} />
   </Stack.Navigator>
);

const OrdersScreen = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false, 
    }}
  >
    <Stack.Screen name="Orders" component={Orders} />
    <Stack.Screen name="Receipt" component={Receipt} />
  </Stack.Navigator>
);


const ProductsScreen = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: true, // Hide default header
    }}
  >
    <Stack.Screen name="Products" component={Products} />
    <Stack.Screen name="ProductPage" component={ProductPage} />
    <Stack.Screen name="Catalog" component={Catalog} />
    <Stack.Screen name="getAllProducts" component={getAllProducts} />
    <Stack.Screen name="Checkout" component={Checkout} />

  </Stack.Navigator>
);

// Define screen options for the bottom tab navigator

const App = () => {
  const screens = {
    Home: HomeScreen,
    Products: ProductsScreen,
    Orders: OrdersScreen,
    Setting: SettingScreen,
  };
  const screenOptions = ({ route }) => ({
    tabBarIcon: ({ color, size }) => {
      let iconName;
  
      if (route.name === "Home") {
        iconName = "ios-home";
      } else if (route.name === "Products") {
        iconName = "ios-cart";
      } else if (route.name === "Orders") {
        iconName = "ios-archive";
      } else if (route.name === "Setting") {
        iconName = "ios-settings";
      }
  
      return <Ionicons name={iconName} size={size} color={color} />;
    },
  });


  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={screenOptions}
          tabBarOptions={{
            activeTintColor: "#31572c",
            inactiveTintColor: "gray",
          }}
        >
          {Object.entries(screens).map(([name, component]) => (
            <Tab.Screen key={name} name={name} component={component} options={{headerShown:false}}/>
          ))}
          {/* <Tab.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }} // Hide default header
          />
          <Tab.Screen
            name="Checkout"
            component={CheckoutScreen}
            options={{ headerShown: false }} 
          />
          <Tab.Screen
            name="Orders"
            component={Orders}
            options={{ headerShown: false }} 
          />
          <Tab.Screen
            name="Customers"
            component={Customers}
            options={{ headerShown: false }} 
          /> */}
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
