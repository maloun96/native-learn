import * as React from "react";
import {Text, View, StyleSheet, Image, TextInput} from "react-native";
import {TYPOGRAPHY} from "../../../styles";

const FeedSearch = () => {
  const searchIcon = require('assets/icons/search-black.png');
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>Travelling to?</Text>
        <Image source={searchIcon} />
      </View>
      <TextInput placeholder="Enter a name of a city you're traveling to" style={styles.input}/>
    </View>
  )
};

const styles = StyleSheet.create({
  title: {
    fontSize: TYPOGRAPHY.bigFontSize,
    fontWeight: TYPOGRAPHY.extraBold
  },
  input: {
    fontSize: TYPOGRAPHY.mediumFontSize,
    marginVertical: 10,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between"
  }
})

export default FeedSearch;
