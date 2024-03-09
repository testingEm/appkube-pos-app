import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

//redux
import {store} from './src/redux/store/store';
import {Provider} from 'react-redux';

//Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens
import Home from './src/components/Home';
import Settings from './src/components/Setting';
import Products from './src/components/Products';
import ProductsList from './src/components/ProductList';
import ProductPage from './src/components/ProductPage.js';
import Checkout from './src/components/Checkout/index.js';
import Orders from './src/components/Orders/index.js';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeScreen = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
);

const SettingScreen = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Setting" component={Settings} />
  </Stack.Navigator>
);

const OrdersScreen = () => (
  <Stack.Navigator>
    <Stack.Screen name="Orders" component={Orders} />
    {/* <Stack.Screen name="Receipt" component={Receipt} /> */}
  </Stack.Navigator>
);

const ProductsScreen = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: true,
    }}>
    <Stack.Screen name="Products" component={Products} />
    <Stack.Screen name="ProductPage" component={ProductPage} />
    {/* <Stack.Screen name="Catalog" component={Catalog} /> */}
    <Stack.Screen name="Checkout" component={Checkout} />
    {/* <Stack.Screen name="Cash" component={Cash} options={{ headerShown: false }} /> */}
    {/* <Stack.Screen name="Share" component={Share} options={{ headerShown: false }} /> */}
    <Stack.Screen name="ProductsList" component={ProductsList} />
  </Stack.Navigator>
);

const screenOptions = ({route}) => ({
  tabBarIcon: ({color, size}) => {
    let ionicons;
    if (route.name === 'Home') {
      ionicons = 'ios-home';
    } else if (route.name === 'Setting') {
      ionicons = 'ios-settings';
    } else if (route.name === 'Products') {
      ionicons = 'ios-products';
    } else if (route.name === 'orders') {
      ionicons = 'ios-cart';
    }

    return <Ionicons name={ionicons} size={size} color={color} />;
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={screenOptions}>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Tab.Screen
            name="Products"
            component={ProductsScreen}
            options={{headerShown: false}}
          />
          <Tab.Screen
            name="Orders"
            component={OrdersScreen}
            options={{headerShown: false}}
          />
          <Tab.Screen
            name="Setting"
            component={SettingScreen}
            options={{headerShown: false}}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
