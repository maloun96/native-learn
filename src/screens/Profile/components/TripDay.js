import * as React from "react";
import {Text, View, StyleSheet} from "react-native";
import {COLORS, TYPOGRAPHY} from "../../../styles";
import Day from "../../../components/Day/Day";

const TripDay = () => (
  <View style={style.container}>
    <Day />
    <Text style={style.inRoute}>IN ROUTE</Text>
  </View>
);

const style = StyleSheet.create({
  container: {
    height: 45,
    flexDirection: "column",
    justifyContent: "space-between"
  },
  inRoute: {
    color: COLORS.Yellow,
    fontWeight: TYPOGRAPHY.extraBold
  },
});

export default TripDay;
