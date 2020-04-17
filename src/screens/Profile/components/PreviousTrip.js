import * as React from "react";
import {useRef, useState, useEffect} from "react";
import {SPACING, TYPOGRAPHY} from "../../../styles";
import {View, StyleSheet, Text, Dimensions, ScrollView} from "react-native";
import Trip from "./Trip";
import {SafeAreaView} from "react-native-safe-area-context";

const {width} = Dimensions.get('window');

const PreviousTrip = () => {

  return (
    <View style={styles.container}>
      <Text style={TYPOGRAPHY.title}>Previous Trips</Text>
      <Text style={TYPOGRAPHY.regularSubHeader}>Trips she has taken in the past 12 months</Text>
      <SafeAreaView  style={{flexDirection: "row"}}>
        <ScrollView
          horizontal
          snapToAlignment='center'
        >
          <View style={styles.trip}>
            <Trip />
          </View>
          <View style={styles.trip}>
            <Trip />
          </View>
          <View style={styles.trip}>
            <Trip />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "column",
    paddingHorizontal: SPACING.base,
    paddingVertical: SPACING.base
  },
  image: {
    marginRight: 20,
    width: width / 2 - 25,
    borderRadius: 20
  },
  trip: {
    width: width - 80,
    marginRight: 20,
    backgroundColor: "red"
  },
  cardTitle: {
    position: "absolute",
    bottom: 10,
    left: 10,
    color: "#fff",
    fontSize: TYPOGRAPHY.bigFontSize,
    fontWeight: TYPOGRAPHY.extraBold
  }
});

export default PreviousTrip;
