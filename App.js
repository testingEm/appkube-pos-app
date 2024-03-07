import React from "react";
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
import Setting from "./src/components/setting"
import Products from "./src/components/Products";
import Adduser from "./src/components/Adduser";
import ProductPage from "./src/components/ProductPage/ProductPage";
import getAllProducts from "./src/components/getAllProducts";
import ProductsPrint from "./src/components/productsPrinter";
import PrintToA4 from "./src/components/Print";
import ImportProducts from "./src/components/ImportProducts";
import Cash from "./src/components/Cash";
import Share from "./src/components/Share";

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
    <Stack.Screen name="Cash" component={Cash} />
    <Stack.Screen name="Share" component={Share}  />
  </Stack.Navigator>
);

const SettingScreen = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: true,
    }}
  >
    <Stack.Screen name="setting" component={Setting} />
    <Stack.Screen name="Customers" component={Customers} />
    <Stack.Screen name="PrintToA4" component={PrintToA4} />
    <Stack.Screen name="ProductsPrint" component={ProductsPrint} />
    <Stack.Screen name="ImportProducts" component={ImportProducts} />
  </Stack.Navigator>
);

const OrdersScreen = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Orders" component={Orders} />
    {/* <Stack.Screen name="Receipt" component={Receipt} /> */}
  </Stack.Navigator>
);

const ProductsScreen = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: true,
    }}
  >
    <Stack.Screen name="Products" component={Products} />
    <Stack.Screen name="ProductPage" component={ProductPage} />
    <Stack.Screen name="Catalog" component={Catalog} />
    <Stack.Screen name="Checkout" component={Checkout} options={{ headerShown: false }} />
    <Stack.Screen name="Cash" component={Cash} options={{ headerShown: false }} />
    <Stack.Screen name="Share" component={Share} options={{ headerShown: false }} />
    <Stack.Screen name="getAllProducts" component={getAllProducts} />
  </Stack.Navigator>
);

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

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={screenOptions}
          tabBarActiveTintColor="#31572c"
          tabBarInactiveTintColor="gray"
          tabBarStyle={{ display: "flex" }}
        >
          <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Tab.Screen name="Products" component={ProductsScreen} options={{ headerShown: false }} />
          <Tab.Screen name="Orders" component={OrdersScreen} options={{ headerShown: false }} />
          <Tab.Screen name="Setting" component={SettingScreen} options={{ headerShown: false }} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
