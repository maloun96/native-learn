import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Image, View} from "react-native";
import Feed from "src/screens/Feed/Feed";
import React from "react";
import Profile1 from "src/screens/Profile/Profile1";
import getActiveRouteState from "../../utils/getActiveRouteState";

const Tab = createBottomTabNavigator();

const TabNavigator = ({navigation}) => {
  const avatar = require('assets/icons/avatar.png');
  const avatar2 = require('assets/icons/avatar-2.png');
  const avatar3 = require('assets/icons/avatar-3.png');
  const feed = require('assets/travel/feed.png');
  return (
    <View style={{flex: 1}}>
        <Tab.Navigator
          initialRouteName="Feed"
          tabBarOptions={{
            activeTintColor: '#e91e63',
            showLabel: false
          }}
        >
          <Tab.Screen
            name="Feed"
            component={Feed}
            options={({route, navigation}) => ({
              tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const {name} = getActiveRouteState(navigation.dangerouslyGetState());
                if (name === 'Feed') {
                  return <Image source={require('assets/icons/home-black.png')} />
                } else {
                  return <Image source={require('assets/icons/home-gray.png')} />
                }
              },

            })}
          />
          <Tab.Screen
            name="Profile1"
            component={Profile1}
            options={({route, navigation}) => ({
              tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const {name} = getActiveRouteState(navigation.dangerouslyGetState());
                if (name === 'Profile1') {
                  return <Image source={require('assets/icons/user.png')} />
                } else {
                  return <Image source={require('assets/icons/user-gray.png')} />
                }
              },

            })}
          />
        </Tab.Navigator>
    </View>
  );
}

export default TabNavigator;
