import * as React from "react";
import {View, StyleSheet, Image, Text, ImageBackground, Dimensions} from "react-native";
import {COLORS, SPACING, TYPOGRAPHY} from "../../../styles";
import Day from "../../../components/Day/Day";

const {width} = Dimensions.get('window');

const FeedCard = () => {
  const avatar = require('assets/icons/avatar.png');
  const avatar2 = require('assets/icons/avatar-2.png');
  const avatar3 = require('assets/icons/avatar-3.png');
  const feed = require('assets/travel/feed.png');

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.author}>
          <Image source={avatar} style={styles.avatar}/>
          <Text style={styles.authorName}>Jennifer</Text>
        </View>
        <View>
          <Text style={styles.time}>2 hours ago</Text>
        </View>
      </View>
      <View>
        <ImageBackground source={feed} style={styles.backgroundImage}>
          <View style={styles.day}>
            <Day />
          </View>
          <View style={styles.overUsers}>
            <Image source={avatar} style={styles.usersAvatar}/>
            <Image source={avatar2} style={styles.usersAvatar}/>
            <Image source={avatar3} style={styles.usersAvatar}/>
            <View style={[styles.usersAvatar, styles.more]}>
              <Text style={{fontWeight: TYPOGRAPHY.extraBold}}>+2</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  card: {
    marginTop: 50,
  },
  overUsers: {
    position: "absolute",
    flexDirection: "row",
    top: 10,
    right: 10,
  },
  usersAvatar: {
    marginLeft: -15,
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 30,
  },
  more: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.Yellow,
  },
  day: {
    position: "absolute",
    left: 10,
    top: 20,
  },
  avatar: {
    width: 30,
    height: 30
  },
  backgroundImage: {
    borderRadius: 50,
    flex: 1,
    width: width - (SPACING.base * 2),
    maxHeight: 300,
    height: null
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  time: {
    color: COLORS.Gray_2,
    fontSize: TYPOGRAPHY.mediumFontSize,
  },
  author: {
    alignItems: "center",
    flexDirection: "row"
  },
  authorName: {
    marginLeft: 10,
    fontSize: TYPOGRAPHY.normalSize,
    fontWeight: TYPOGRAPHY.bold,
  }
});
export default FeedCard;
