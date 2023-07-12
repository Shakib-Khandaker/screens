import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const RadissonBluContainer = () => {
  return (
    <View style={styles.lineParent}>
      <View style={styles.frameChild} />
      <View style={styles.buttonParent}>
        <View style={[styles.button, styles.buttonLayout]} />
        <View style={[styles.button1, styles.button1Position]} />
      </View>
      <Text style={[styles.receipt, styles.receiptTypo]}>Receipt</Text>
      <Text style={[styles.details, styles.receiptTypo]}>Details</Text>
      <Image
        style={[styles.frameItem, styles.button1Position]}
        contentFit="cover"
        source={require("../assets/rectangle-593.png")}
      />
      <Text style={styles.radissonBluHotel}>Radisson Blu Hotel</Text>
      <Text
        style={[styles.title, styles.titlePosition]}
      >{`14 June - 18 Jan (5 Days) `}</Text>
      <Text style={[styles.title1, styles.titlePosition]}>Le 150000</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonLayout: {
    alignItems: "center",
    justifyContent: "center",
    width: 142,
    borderRadius: Border.br_xs,
    height: 28,
  },
  button1Position: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  receiptTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 21,
    top: 152,
    fontSize: FontSize.bodyMediumBold_size,
    position: "absolute",
  },
  titlePosition: {
    textAlign: "left",
    lineHeight: 22,
    top: "50%",
    color: Color.black,
    position: "absolute",
  },
  frameChild: {
    top: 130,
    left: -1,
    borderColor: "rgba(186, 186, 190, 0.66)",
    borderTopWidth: 2,
    width: 336,
    height: 2,
    borderStyle: "solid",
    position: "absolute",
  },
  button: {
    left: 160,
    borderColor: "#fe9e28",
    borderWidth: 1,
    top: 0,
    alignItems: "center",
    justifyContent: "center",
    width: 142,
    borderRadius: Border.br_xs,
    borderStyle: "solid",
    backgroundColor: Color.white,
    position: "absolute",
  },
  button1: {
    backgroundColor: Color.orange_100,
    alignItems: "center",
    justifyContent: "center",
    width: 142,
    borderRadius: Border.br_xs,
    height: 28,
  },
  buttonParent: {
    top: 148,
    left: 16,
    width: 302,
    height: 28,
    position: "absolute",
  },
  receipt: {
    left: 220,
    color: Color.orange_100,
  },
  details: {
    left: 63,
    color: Color.steelblue_100,
  },
  frameItem: {
    width: 120,
    height: 120,
    borderRadius: Border.br_11xl,
    left: 0,
  },
  radissonBluHotel: {
    top: 26,
    left: 140,
    fontSize: FontSize.size_mid,
    letterSpacing: 0,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.black,
    textAlign: "center",
    position: "absolute",
  },
  title: {
    marginTop: -41,
    left: 139,
    fontFamily: FontFamily.openSansRegular,
    fontSize: FontSize.bodyMediumBold_size,
    textAlign: "left",
    lineHeight: 22,
    top: "50%",
  },
  title1: {
    marginTop: -10,
    left: 176,
    fontSize: FontSize.size_lg,
    fontWeight: "600",
    fontFamily: FontFamily.openSansSemibold,
  },
  lineParent: {
    top: 192,
    left: 34,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowRadius: 1,
    elevation: 1,
    shadowOpacity: 1,
    width: 334,
    height: 202,
    overflow: "hidden",
    backgroundColor: Color.white,
    position: "absolute",
    borderRadius: Border.br_11xl,
  },
});

export default RadissonBluContainer;
