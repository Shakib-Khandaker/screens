import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const RegistrationPageActionregi = () => {
  return (
    <View style={styles.registrationPageActionregi}>
      <Image
        style={styles.registrationPageActionregiChild}
        contentFit="cover"
        source={require("../assets/group-100.png")}
      />
      <Text style={styles.signUp}>{`Sign up `}</Text>
      <View
        style={[
          styles.registrationPageActionregiItem,
          styles.registrationLayout,
        ]}
      />
      <View
        style={[
          styles.registrationPageActionregiInner,
          styles.registrationLayout,
        ]}
      />
      <View style={[styles.rectangleView, styles.registrationLayout]} />
      <View style={styles.registrationPageActionregiChild1} />
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/group-28.png")}
      />
      <Image
        style={[
          styles.registrationPageActionregiChild2,
          styles.registrationChildPosition,
        ]}
        contentFit="cover"
        source={require("../assets/group-101.png")}
      />
      <Image
        style={[
          styles.registrationPageActionregiChild3,
          styles.registrationChildPosition,
        ]}
        contentFit="cover"
        source={require("../assets/group-101.png")}
      />
      <Text style={styles.enterEMailAddress}>Enter e-mail address</Text>
      <Text style={[styles.createAPassword, styles.passwordTypo]}>
        Create a password
      </Text>
      <Text style={[styles.repeatPassword, styles.passwordTypo]}>
        Repeat password
      </Text>
      <Text style={[styles.iHaveReadContainer, styles.continueTypo]}>
        <Text style={styles.iHaveRead}>{`I have read the `}</Text>
        <Text style={styles.termsOfService}>Terms of Service</Text>
      </Text>
      <Text style={[styles.continue, styles.continueTypo]}>Continue</Text>
      <Image
        style={styles.registrationPageActionregiChild4}
        contentFit="cover"
        source={require("../assets/group-115.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  registrationLayout: {
    height: 51,
    width: 355,
    borderWidth: 1,
    borderColor: "#e9e9e9",
    borderStyle: "solid",
    borderRadius: Border.br_17xl,
    position: "absolute",
  },
  registrationChildPosition: {
    left: 42,
    height: 22,
    width: 22,
    position: "absolute",
  },
  passwordTypo: {
    color: Color.darkgray,
    left: 75,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.bodyLargeBold_size,
    textAlign: "left",
    position: "absolute",
  },
  continueTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  registrationPageActionregiChild: {
    top: 74,
    width: 28,
    height: 28,
    left: 23,
    position: "absolute",
  },
  signUp: {
    top: 243,
    left: 143,
    fontSize: FontSize.size_11xl,
    fontWeight: "600",
    fontFamily: FontFamily.title2,
    textAlign: "left",
    color: Color.gray_300,
    position: "absolute",
  },
  registrationPageActionregiItem: {
    top: 306,
    left: 24,
  },
  registrationPageActionregiInner: {
    top: 375,
    left: 23,
  },
  rectangleView: {
    top: 439,
    left: 23,
  },
  registrationPageActionregiChild1: {
    top: 779,
    borderRadius: Border.br_xs,
    backgroundColor: Color.orange_100,
    width: 356,
    height: 54,
    left: 24,
    position: "absolute",
  },
  groupIcon: {
    top: 321,
    left: 43,
    height: 22,
    width: 22,
    position: "absolute",
  },
  registrationPageActionregiChild2: {
    top: 390,
  },
  registrationPageActionregiChild3: {
    top: 454,
  },
  enterEMailAddress: {
    top: 319,
    left: 76,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.bodyLargeBold_size,
    textAlign: "left",
    color: Color.gray_300,
    position: "absolute",
  },
  createAPassword: {
    top: 388,
  },
  repeatPassword: {
    top: 452,
  },
  iHaveRead: {
    color: Color.black,
  },
  termsOfService: {
    color: "#0373f3",
  },
  iHaveReadContainer: {
    top: 521,
    left: 63,
    fontSize: FontSize.bodyMediumBold_size,
  },
  continue: {
    top: 794,
    left: 164,
    color: Color.steelblue_100,
    fontSize: FontSize.bodyLargeBold_size,
    fontWeight: "500",
  },
  registrationPageActionregiChild4: {
    top: 520,
    left: 34,
    width: 24,
    height: 24,
    position: "absolute",
  },
  registrationPageActionregi: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.seashell_100,
    flex: 1,
    width: "100%",
    height: 870,
    overflow: "hidden",
  },
});

export default RegistrationPageActionregi;
