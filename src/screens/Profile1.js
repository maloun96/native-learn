import * as React from "react";
import {Text, View, Image, SafeAreaView, ImageBackground } from "react-native";

const Profile1 = () => {
  return (
    <View style={{flex: 1, marginTop: 30, marginHorizontal: -10, alignItems: "flex-end"}}>
      <ImageBackground source={require('../../assets/steve-roe-678030-unsplash.png')} style={{
        width: "100%",
        height: 100,
        justifyContent: "center"
      }}>
        <Text style={{color:"white"}}>TEST</Text>
      </ImageBackground>
    </View>
  )
};

export default Profile1;