import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Startscreen from '../screens/Startscreen';
import AdminLogin from '../screens/AdminLogin';
import Map from '../screens/Map';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AdminHome from '../screens/AdminHome';
import RestaurantDetail from '../screens/RestaurantDetail';
import AddFood from '../screens/AddFood';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomePage() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home-outline' : 'home-outline';
          } else if (route.name === 'AdminLogin') {
            iconName = focused ? 'person-outline' : 'person-outline';
          } else if (route.name === 'Map') {
            iconName = focused ? 'navigate' : 'navigate';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen name="Map" component={Map} options={{headerShown: false}} />
      <Tab.Screen
        name="AdminLogin"
        component={AdminLogin}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Startscreen"
          component={Startscreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AdminHome"
          component={AdminHome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RestaurantDetail"
          component={RestaurantDetail}
          options={{headerShown: false}}
        />
        <Stack.Screen name="AddFood" 
        component={AddFood} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
