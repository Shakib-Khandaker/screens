import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const TopContainer = () => {
  return (
    <View style={[styles.top, styles.topPosition]}>
      <View style={[styles.arrowParent, styles.topPosition]}>
        <Image
          style={[styles.arrowIcon, styles.labelPosition]}
          contentFit="cover"
          source={require("../assets/arrow1.png")}
        />
        <Text style={[styles.label, styles.labelPosition]}>Back</Text>
      </View>
      <View style={styles.segmentedControlleft}>
        <Image
          style={[styles.bgIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/bg2.png")}
        />
        <Image
          style={[styles.bgIcon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/bg3.png")}
        />
        <Text style={[styles.year, styles.yearPosition]}>Year</Text>
        <Text style={[styles.month, styles.yearPosition]}>Month</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topPosition: {
    top: "50%",
    position: "absolute",
  },
  labelPosition: {
    marginTop: -11,
    top: "50%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  yearPosition: {
    textAlign: "center",
    fontSize: FontSize.bodySmallMedium_size,
    left: "50%",
    marginTop: -7.5,
    top: "50%",
    position: "absolute",
  },
  arrowIcon: {
    width: 15,
    height: 21,
    left: 0,
  },
  label: {
    left: 22,
    fontSize: FontSize.size_mid,
    letterSpacing: 0,
    lineHeight: 22,
    fontFamily: FontFamily.openSansRegular,
    color: Color.black,
    textAlign: "left",
    width: 44,
  },
  arrowParent: {
    marginTop: 6,
    width: 66,
    height: 22,
    left: 0,
  },
  bgIcon: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_11xs,
    opacity: 0.1,
  },
  bgIcon1: {
    height: "93.33%",
    top: "3.03%",
    right: 86,
    bottom: "3.64%",
    left: 1,
    borderRadius: Border.br_8xs,
  },
  year: {
    marginLeft: 30.5,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.silver,
  },
  month: {
    marginLeft: -61.5,
    fontWeight: "600",
    fontFamily: FontFamily.interSemibold,
    color: Color.orange_100,
  },
  segmentedControlleft: {
    top: 0,
    right: 0,
    left: 137,
    height: 33,
    position: "absolute",
  },
  top: {
    marginTop: -399,
    left: 33,
    width: 340,
    height: 56,
  },
});

export default TopContainer;
