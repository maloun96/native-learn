import * as React from "react";
import {View, StyleSheet, Text, Image} from "react-native";
import {SPACING, TYPOGRAPHY} from "../../../styles";

const UserProfile = () => {
  const starIcon = require('assets/icons/star.png');
  const avatar = require('assets/icons/avatar.png');
  return (
    <View style={style.container}>
      <View style={style.leftSide}>
        <Text style={style.title}>Alex</Text>
        <Text style={style.subtitle}>Very Experienced</Text>
        <View style={style.startRow}>
          <Image source={starIcon} style={style.starIcon}/>
          <Image source={starIcon} style={style.starIcon} />
          <Image source={starIcon} style={style.starIcon} />
        </View>
      </View>
      <View style={style.avatar}>
        <Image source={avatar} style={style.avatarImg}/>
      </View>
    </View>
  )
};

const style = StyleSheet.create({
  container: {
    backgroundColor: "#eeeeee",
    height: 100,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: SPACING.base,
    paddingVertical: SPACING.base
  },
  subtitle: {
    fontSize: TYPOGRAPHY.mediumFontSize
  },
  avatar: {
    justifyContent: "center",
  },
  avatarImg: {
    width: 50,
    height: 50
  },
  startRow: {
    flexDirection: "row",
  },
  title: {
    fontSize: TYPOGRAPHY.bigFontSize,
    fontWeight: TYPOGRAPHY.extraBold
  },
  leftSide: {
    flexDirection: "column",
    justifyContent: "space-between"
  },
  starIcon: {
    marginRight: 3
  }
});

export default UserProfile;
