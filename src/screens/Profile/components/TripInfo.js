import * as React from "react";
import {Image, Text, View, StyleSheet} from "react-native";
import {TYPOGRAPHY} from "../../../styles";

const TripInfo = () => {
  const plateIcon = require('assets/icons/plate-white-revert.png');
  const dotsIcon = require('assets/icons/dots-white.png');
  return (
    <View style={style.container}>
      <Text style={[style.text, {textAlign: "right"}]}>Wed, 4 NOV</Text>
      <View style={style.directionContainer}>
        <Image source={plateIcon}/>
        <Text style={style.text}>OSLO</Text>
        <Image source={dotsIcon}/>
        <Text style={style.text}>JAPAN</Text>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  directionContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: 160
  },
  text: {
    color: "#fff",
    fontWeight: TYPOGRAPHY.extraBold
  },
  container: {
    height: 45,
    flexDirection: "column",
    justifyContent: "space-between"
  },
});

export default TripInfo;
