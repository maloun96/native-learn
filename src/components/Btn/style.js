import {COLORS, TYPOGRAPHY, SPACING} from "../../styles";
import {StyleSheet} from 'react-native';

const commonContainerStyle = {
  borderRadius: 24,
  paddingHorizontal: SPACING.large,
  paddingVertical: SPACING.small,
};
const commontTextStyle = {
  textAlign: "center",
  fontWeight: TYPOGRAPHY.extraBold
}


const BtnStyle = StyleSheet.create({
  outline: {
    ...commonContainerStyle,
    borderRadius: 24,
    borderBottomWidth: 0,
    shadowColor: COLORS.Gray_1,
    backgroundColor: "white",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  containerFull: {
    width: "100%",
  },
  containerSmall: {
    paddingHorizontal: SPACING.large,
    paddingVertical: SPACING.small,
  },
  containerMedium: {
    paddingHorizontal: SPACING.base,
    paddingVertical: SPACING.small,
  },
  filled: {
    ...commonContainerStyle,
    backgroundColor: COLORS.BLUE
  },
  warning: {
    ...commonContainerStyle,
    backgroundColor: COLORS.Yellow
  },
  textWhite: {
    ...commontTextStyle,
    color: "#fff"
  },
  textBlue: {
    ...commontTextStyle,
    color: COLORS.BLUE
  },
  textBlack: {
    ...commontTextStyle,
    color: COLORS.Black
  },
  textMedium: {
    fontSize: TYPOGRAPHY.mediumFontSize
  },
  textBig: {
    fontSize: TYPOGRAPHY.bigFontSize
  },
  textSmall: {
    fontSize: TYPOGRAPHY.smallFontSize
  }

});

export default BtnStyle;
