import * as React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const OnboardingIcon1 = () => {
  return (
    <ImageBackground
      style={styles.onboardingIcon}
      resizeMode="cover"
      source={require("../assets/onboarding1.png")}
    >
      <Image
        style={styles.prideAppLogo2}
        contentFit="cover"
        source={require("../assets/pride-app-logo-2.png")}
      />
      <View style={styles.onboardingChild} />
      <Text
        style={[styles.getYourFood, styles.getYourFoodText]}
      >{`get your food 
delivered to 
your doorstep`}</Text>
      <Text style={[styles.swiftDelivery, styles.getYourFoodText]}>
        Swift Delivery
      </Text>
      <Image
        style={styles.onboardingItem}
        contentFit="cover"
        source={require("../assets/group-730.png")}
      />
      <Text style={styles.finish}>Finish</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  getYourFoodText: {
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    color: Color.white,
    textAlign: "left",
    position: "absolute",
  },
  prideAppLogo2: {
    top: 398,
    left: 15,
    width: 56,
    height: 56,
    position: "absolute",
  },
  onboardingChild: {
    top: -1,
    left: 0,
    backgroundColor: Color.steelblue_200,
    width: 402,
    position: "absolute",
    height: 870,
  },
  getYourFood: {
    top: 672,
    left: 43,
    fontSize: FontSize.size_xl,
    lineHeight: 30,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
  },
  swiftDelivery: {
    top: 627,
    left: 30,
    fontSize: FontSize.size_11xl,
    lineHeight: 45,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
  },
  onboardingItem: {
    top: 827,
    left: 176,
    width: 63,
    height: 23,
    position: "absolute",
  },
  finish: {
    top: 820,
    left: 318,
    fontSize: FontSize.bodyLargeBold_size,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.orange_100,
    textAlign: "left",
    position: "absolute",
  },
  onboardingIcon: {
    borderRadius: Border.br_11xl,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 870,
  },
});

export default OnboardingIcon1;
