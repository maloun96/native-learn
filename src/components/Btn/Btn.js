import * as React from "react";
import {Text, TouchableOpacity} from "react-native";
import PropTypes from 'prop-types';
import BtnStyle from "./style";

const Btn = ({
  title,
  onPress,
  type = "outline",
  size = "full",
  containerStyle,
  textStyle,
}) => {

  const getContainerStyle = () => {
    return BtnStyle[type];
  };

  const getTextStyle = () => {
    if (type === 'filled') {
      return BtnStyle.textWhite
    }
    if (type === 'outline') {
      return BtnStyle.textBlue
    }
    if (type === 'warning') {
      return BtnStyle.textBlack
    }
  };

  const getContainerSize = () => {
    if (size === "full") {
      return BtnStyle.containerFull
    }
    if (size === "small") {
      return BtnStyle.containerSmall
    }
    if (size === "medium") {
      return BtnStyle.containerMedium
    }
  }

  const getTextSize = () => {
    if (size === "full") {
      return BtnStyle.textBig
    }
    if (size === "small") {
      return BtnStyle.textSmall
    }
    if (size === "medium") {
      return BtnStyle.textMedium
    }
  }

  const ctnStyle = getContainerStyle();
  const ctnSize = getContainerSize();
  const txtStyle = getTextStyle();
  const txtSize = getTextSize();

  return (
    <TouchableOpacity
      style={[ctnStyle, ctnSize, containerStyle]}
      onPress={onPress}
    >
      <Text style={[txtStyle, txtSize, textStyle]}>{title}</Text>
    </TouchableOpacity>
  )
};

Btn.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  type: PropTypes.oneOf(["primary", "warning", "outline"]),
  size: PropTypes.oneOf(["small", "medium", "full"]),
  containerStyle: PropTypes.object,
  textStyle: PropTypes.object,
  icon: PropTypes.string
};

export default Btn;