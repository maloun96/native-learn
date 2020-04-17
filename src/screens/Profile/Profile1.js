import * as React from "react";
import {View, StyleSheet, ScrollView} from "react-native";
import {SPACING} from "../../styles";
import UserProfile from "./components/UserProfile";
import NextTrip from "./components/NextTrip";
import TravelPhotos from "./components/TravelPhotos";
import PreviousTrip from "./components/PreviousTrip";
import Trip from "./components/Trip";

const Profile1 = () => {
  return (
    <ScrollView>
      <View style={style.box}>
        <Trip />
        <UserProfile/>
        <NextTrip/>
        <TravelPhotos/>
        <PreviousTrip/>
      </View>
    </ScrollView>
  )
};

const style = StyleSheet.create({
  box: {
    flex: 1,
    marginTop: 50,
    alignItems: "flex-start",
  },
})

export default Profile1;
