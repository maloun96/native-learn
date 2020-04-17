import React from 'react';
import {StyleSheet} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from "./src/components/TabNavigator/TabNavigator";
import NavigationContainer from "@react-navigation/native/src/NavigationContainer";
const Stack = createStackNavigator();


export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
