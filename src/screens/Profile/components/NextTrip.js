import * as React from "react";
import {View, StyleSheet, Text, Image} from "react-native";
import {COLORS, SPACING, TYPOGRAPHY} from "../../../styles";
import Btn from "../../../components/Btn/Btn";

const NextTrip = () => {
  const planeIcon = require('assets/icons/plane-black.png');
  return (
    <View style={style.container}>
      <View>
        <Text style={style.title}>50,000 mi</Text>
        <Text style={style.subtitle}>Backpacker</Text>
      </View>
      <View style={style.col2}>
        <Image source={planeIcon}  style={{marginRight: 10}}/>
        <View>
          <Text style={style.title}>Next trip</Text>
          <Text style={style.subtitle}>Moscow</Text>
        </View>
      </View>
      <View>
        <Btn
          title="Edit"
          type="filled"
          size="medium"
          onPress={() => {console.log('press')}}
          containerStyle={{width: 80}}
          textStyle={{fontWeight: TYPOGRAPHY.extraBold}}
        />
      </View>
    </View>
  )
};

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: SPACING.base,
    paddingVertical: SPACING.large
  },
  col2: {
    alignItems: "center",
    flexDirection: "row"
  },
  title: {
    fontWeight: TYPOGRAPHY.extraBold,
    fontSize: TYPOGRAPHY.mediumFontSize,
  },
  subtitle: {
    fontWeight: TYPOGRAPHY.extraBold,
    fontSize: TYPOGRAPHY.mediumFontSize,
    color: COLORS.Gray_2
  },
});

export default NextTrip;
