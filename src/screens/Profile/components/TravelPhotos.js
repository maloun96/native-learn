import * as React from "react";
import {useRef, useState, useEffect} from "react";
import {SPACING, TYPOGRAPHY} from "../../../styles";
import {View, StyleSheet, Text, Image, ScrollView, Dimensions} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

const {width} = Dimensions.get('window');

const TravelPhotos = () => {

  const ENTRIES1 = [
    {
      title: 'TOKYO',
      image: require('assets/travel/japan2x.png')
    },
    {
      title: 'INDONESIA',
      image: require('assets/travel/ocean2x.png')
    },
    {
      title: 'BALI',
      image: require('assets/travel/seth-doyle-151914-unsplash2x.png')
    }
  ];

  const renderItem = ({image, title}) => (
    <View key={title}>
      <Image source={image} style={styles.image}/>
      <Text style={styles.cardTitle}>{title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={TYPOGRAPHY.title}>Travel Photos</Text>
      <Text style={TYPOGRAPHY.regularSubHeader}>Travel Photos</Text>
      <SafeAreaView  style={{flexDirection: "row"}}>
        <ScrollView
          horizontal
          snapToAlignment='center'
        >
          {ENTRIES1.map((item) => renderItem(item))}
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
  cardTitle: {
    position: "absolute",
    bottom: 10,
    left: 10,
    color: "#fff",
    fontSize: TYPOGRAPHY.bigFontSize,
    fontWeight: TYPOGRAPHY.extraBold
  }
});

export default TravelPhotos;
