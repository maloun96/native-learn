import * as React from "react";
import {StyleSheet, Text, View} from "react-native";
import {COLORS, TYPOGRAPHY} from "../../styles";

const Day = () => (
  <View style={style.tripDay}>
    <View style={style.dayWrapper}>
      <Text style={style.day}>7</Text>
    </View>
    <Text style={style.text}>day trip</Text>
  </View>
);


const style = StyleSheet.create({
  tripDay: {
    flexDirection: "row",
  },
  text: {
    color: "#fff",
    marginLeft: 5,
    fontWeight: TYPOGRAPHY.extraBold,
  },
  dayWrapper: {
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000'
  },
  day: {
    fontWeight: TYPOGRAPHY.bold,
    width: 26,
    height: 16,
    textAlign: "center",
  }
});


export default Day;
