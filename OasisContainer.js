import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const OasisContainer = () => {
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
        source={require("../assets/rectangle-5931.png")}
      />
      <Text style={styles.oasis}>Oasis</Text>
      <Text style={[styles.title, styles.titlePosition]}>{`1 Moet
Grilled Chicken`}</Text>
      <Text style={[styles.title1, styles.titlePosition]}>Le 500000</Text>
      <Text style={[styles.title2, styles.titlePosition]}>Le 300000</Text>
      <Text style={[styles.title3, styles.titlePosition]}>Le 200000</Text>
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
    fontSize: FontSize.bodyMediumBold_size,
    top: 152,
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
  oasis: {
    top: 26,
    left: 196,
    fontSize: FontSize.size_mid,
    letterSpacing: 0,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.black,
    textAlign: "center",
    position: "absolute",
  },
  title: {
    left: 135,
    fontFamily: FontFamily.openSansRegular,
    textAlign: "left",
    lineHeight: 22,
    top: "50%",
    fontSize: FontSize.bodyMediumBold_size,
    marginTop: -52,
  },
  title1: {
    marginTop: -3,
    left: 167,
    fontSize: FontSize.size_lg,
    fontWeight: "600",
    fontFamily: FontFamily.openSansSemibold,
    textAlign: "left",
    lineHeight: 22,
    top: "50%",
  },
  title2: {
    left: 237,
    fontFamily: FontFamily.openSansRegular,
    textAlign: "left",
    lineHeight: 22,
    top: "50%",
    fontSize: FontSize.bodyMediumBold_size,
    marginTop: -52,
  },
  title3: {
    marginTop: -30,
    left: 238,
    fontFamily: FontFamily.openSansRegular,
    textAlign: "left",
    lineHeight: 22,
    top: "50%",
    fontSize: FontSize.bodyMediumBold_size,
  },
  lineParent: {
    top: 424,
    left: 45,
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

export default OasisContainer;
