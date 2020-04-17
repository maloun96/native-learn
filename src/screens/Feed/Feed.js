import * as React from "react";
import {View, Text, StyleSheet} from "react-native";
import FeedSearch from "./components/FeedSearch";
import {SPACING} from "../../styles";
import FeedCard from "./components/FeedCard";

const Feed = () => {
  return (
    <View style={styles.box}>
      <FeedSearch />
      <FeedCard />
    </View>
  )
};

const styles = StyleSheet.create({
  box: {
    padding: SPACING.base,
    flex: 1,
    marginTop: 50,
    alignItems: "flex-start",
  },
});

export default Feed;
