import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Container5 = () => {
  return (
    <View style={styles.rectangleParent}>
      <Image
        style={[styles.groupChild, styles.childPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-5601.png")}
      />
      <View style={styles.namePrice}>
        <Text style={[styles.vanityLoungeBar, styles.openNowTypo]}>
          Vanity Lounge Bar
        </Text>
      </View>
      <Text style={[styles.openNow, styles.openNowTypo]}>Open Now</Text>
      <Text style={[styles.freetown, styles.textClr]}>Freetown</Text>
      <Text style={[styles.kmFreeDelivery, styles.textClr]}>
        4km Free Delivery
      </Text>
      <View style={styles.rate}>
        <Text style={[styles.text, styles.textClr]}>5.0 (30+)</Text>
        <Image
          style={[styles.rateChild, styles.childPosition]}
          contentFit="cover"
          source={require("../assets/star-1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  childPosition: {
    left: 0,
    position: "absolute",
  },
  openNowTypo: {
    textAlign: "left",
    fontFamily: FontFamily.bodyMediumBold,
    fontWeight: "700",
    lineHeight: 21,
    fontSize: FontSize.bodyMediumBold_size,
  },
  textClr: {
    color: Color.gray_100,
    fontSize: FontSize.bodyMediumBold_size,
    position: "absolute",
  },
  groupChild: {
    borderTopLeftRadius: Border.br_11xl,
    borderTopRightRadius: Border.br_11xl,
    height: 161,
    top: 0,
    width: 349,
  },
  vanityLoungeBar: {
    flex: 1,
    color: Color.gray_400,
  },
  namePrice: {
    top: 176,
    left: 20,
    width: 134,
    flexDirection: "row",
    position: "absolute",
  },
  openNow: {
    top: 181,
    left: 212,
    color: Color.orange_100,
    width: 88,
    position: "absolute",
  },
  freetown: {
    top: 195,
    left: 25,
    width: 69,
    fontFamily: FontFamily.bodyMediumMedium,
    fontWeight: "500",
    color: Color.gray_100,
    textAlign: "left",
    lineHeight: 21,
  },
  kmFreeDelivery: {
    top: 216,
    left: 22,
    width: 130,
    fontFamily: FontFamily.bodyMediumMedium,
    fontWeight: "500",
    color: Color.gray_100,
    textAlign: "left",
    lineHeight: 21,
  },
  text: {
    left: 17,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "right",
    top: 0,
  },
  rateChild: {
    top: 1,
    borderRadius: Border.br_12xs,
    width: 20,
    height: 20,
  },
  rate: {
    top: 210,
    left: 204,
    width: 81,
    height: 21,
    position: "absolute",
  },
  rectangleParent: {
    top: 999,
    left: 29,
    height: 237,
    width: 349,
    position: "absolute",
  },
});

export default Container5;
