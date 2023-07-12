import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const HotelContainer = ({ hotelName, hotelAddress, hotelPrice }) => {
  return (
    <View style={styles.information}>
      <View style={[styles.nameStar, styles.starFlexBox]}>
        <Text style={styles.goldenPeleceHotel}>{hotelName}</Text>
        <View style={[styles.starParent, styles.starFlexBox]}>
          <View style={styles.star}>
            <Image
              style={styles.antDesignstarFilledIcon}
              contentFit="cover"
              source={require("../assets/antdesignstarfilled1.png")}
            />
          </View>
          <Text style={styles.text}>5.0</Text>
        </View>
      </View>
      <Text style={[styles.nothernTerritory0872, styles.nightFlexBox]}>
        {hotelAddress}
      </Text>
      <Text style={styles.nightFlexBox}>
        <Text style={styles.text1}>
          <Text style={styles.text2}>{hotelPrice}</Text>
          <Text style={styles.text3}>{` `}</Text>
        </Text>
        <Text style={styles.night1Typo}>/night</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  starFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  nightFlexBox: {
    marginTop: 8,
    textAlign: "left",
    alignSelf: "stretch",
  },
  goldenPeleceHotel: {
    lineHeight: 21,
    textAlign: "left",
    color: Color.gray_400,
    fontFamily: FontFamily.bodyMediumBold,
    fontWeight: "700",
    fontSize: FontSize.bodyMediumBold_size,
  },
  antDesignstarFilledIcon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  star: {
    flexDirection: "row",
  },
  text: {
    marginLeft: 8,
    lineHeight: 18,
    fontSize: FontSize.bodySmallMedium_size,
    textAlign: "left",
    color: Color.gray_400,
    fontFamily: FontFamily.bodyMediumBold,
    fontWeight: "700",
  },
  starParent: {
    marginLeft: 80,
  },
  nameStar: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  nothernTerritory0872: {
    color: Color.gray_100,
    fontFamily: FontFamily.bodyMediumMedium,
    fontWeight: "500",
    lineHeight: 18,
    fontSize: FontSize.bodySmallMedium_size,
  },
  text2: {
    fontFamily: FontFamily.bodyMediumBold,
    fontWeight: "700",
  },
  text3: {
    lineHeight: 20,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  text1: {
    color: Color.orange_100,
    fontSize: FontSize.bodyMediumBold_size,
  },
  night1Typo: {
    color: Color.gray_100,
    fontFamily: FontFamily.bodyMediumMedium,
    fontWeight: "500",
    lineHeight: 18,
    fontSize: FontSize.bodySmallMedium_size,
  },
  information: {
    borderBottomRightRadius: Border.br_xs,
    borderBottomLeftRadius: Border.br_xs,
    backgroundColor: Color.white,
    shadowColor: "rgba(17, 34, 17, 0.04)",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowRadius: 16,
    elevation: 16,
    shadowOpacity: 1,
    width: 257,
    padding: Padding.p_xs,
  },
});

export default HotelContainer;
