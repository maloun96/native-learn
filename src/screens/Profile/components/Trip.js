import React from "react";
import {ImageBackground, View, StyleSheet} from "react-native";
import TripDay from "./TripDay";
import TripInfo from "./TripInfo";
import {SPACING} from "../../../styles";

const Trip = () => {
  const image = require('assets/steve-roe-678030-unsplash.png');
  return (
    <ImageBackground source={image} style={style.image}>
      <View style={style.inner}>
        <TripDay/>
        <TripInfo/>
      </View>
    </ImageBackground>
  )
};

const style = StyleSheet.create({
  inner: {
    paddingHorizontal: SPACING.base,
    flexDirection: "row",
    height: 70,
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    width: "100%",
    padding: 0,
    backgroundColor: "green",
  },
})

export default Trip;
