import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './App/Screens/Home';
import Restaurant from './App/Screens/Restaurant';
import OrderDelivery from './App/Screens/OrderDelivery';
import Tabs from './App/Navigations/Tabs';
const Stack = createStackNavigator();
const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator
         screenOptions={{
           headerShown: false
         }}
         initialRouteName={"Home"}
        >
           <Stack.Screen name='Home' component={Tabs}/>
           <Stack.Screen name='Restaurant' component={Restaurant}/>
           <Stack.Screen name='OrderDelivery' component={OrderDelivery}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
};
export default App;