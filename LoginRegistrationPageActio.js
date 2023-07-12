import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const LoginRegistrationPageActio = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loginRegistrationPageActio}>
      <Image
        style={styles.loginRegistrationPageActioChild}
        contentFit="cover"
        source={require("../assets/group-100.png")}
      />
      <Text style={styles.signIn}>Sign in</Text>
      <View style={styles.loginRegistrationPageActioItem} />
      <View
        style={[
          styles.loginRegistrationPageActioInner,
          styles.loginChildLayout1,
        ]}
      />
      <View style={[styles.rectangleView, styles.loginChildLayout1]} />
      <View
        style={[
          styles.loginRegistrationPageActioChild1,
          styles.loginChildLayout1,
        ]}
      />
      <View
        style={[
          styles.loginRegistrationPageActioChild2,
          styles.loginChildLayout1,
        ]}
      />
      <Image
        style={[styles.facebookNegative, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/facebook--negative.png")}
      />
      <Image
        style={[styles.appleOriginal, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/apple--original.png")}
      />
      <Image
        style={[styles.groupIcon, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group-281.png")}
      />
      <Text style={[styles.enterEMailAddress, styles.signUp1Typo]}>
        Enter e-mail address
      </Text>
      <Text style={[styles.orContinueWith, styles.signUp1Typo]}>
        Or continue with
      </Text>
      <Text
        style={[styles.notRegistered, styles.signUpPosition]}
      >{`Not Registered? `}</Text>
      <Pressable
        style={[styles.signUp, styles.signUpPosition]}
        onPress={() =>
          navigation.navigate(
            "RegistrationPageActionregisterfirebaseEmailPassword"
          )
        }
      >
        <Text style={[styles.signUp1, styles.signUp1Typo]}>Sign up</Text>
      </Pressable>
      <Text style={[styles.continueWithApple, styles.continueTypo]}>
        Continue with Apple
      </Text>
      <Text style={[styles.continueWithGoogle, styles.continueTypo]}>
        Continue with google
      </Text>
      <Text style={[styles.continueWithFacebook, styles.continueTypo]}>
        Continue with Facebook
      </Text>
      <Text style={[styles.continue, styles.continueTypo]}>Continue</Text>
      <View
        style={[
          styles.loginRegistrationPageActioChild3,
          styles.loginChildLayout,
        ]}
      />
      <View
        style={[
          styles.loginRegistrationPageActioChild4,
          styles.loginChildLayout,
        ]}
      />
      <Image
        style={styles.mdigoogleIcon}
        contentFit="cover"
        source={require("../assets/mdigoogle.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loginChildLayout1: {
    height: 54,
    width: 356,
    position: "absolute",
  },
  groupIconLayout: {
    height: 22,
    width: 22,
    position: "absolute",
  },
  signUp1Typo: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.bodyLargeBold_size,
    textAlign: "left",
  },
  signUpPosition: {
    top: 731,
    position: "absolute",
  },
  continueTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.bodyLargeBold_size,
    textAlign: "left",
    position: "absolute",
  },
  loginChildLayout: {
    height: 1,
    width: 122,
    backgroundColor: Color.gainsboro,
    top: 291,
    position: "absolute",
  },
  loginRegistrationPageActioChild: {
    top: 74,
    width: 28,
    height: 28,
    left: 23,
    position: "absolute",
  },
  signIn: {
    top: 129,
    fontSize: FontSize.size_11xl,
    fontWeight: "600",
    fontFamily: FontFamily.title2,
    color: Color.gray_300,
    textAlign: "left",
    left: 24,
    position: "absolute",
  },
  loginRegistrationPageActioItem: {
    top: 192,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 2,
    width: 355,
    height: 51,
    borderRadius: Border.br_17xl,
    left: 24,
    position: "absolute",
  },
  loginRegistrationPageActioInner: {
    top: 420,
    shadowOpacity: 1,
    elevation: 2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: Color.white,
    width: 356,
    borderRadius: Border.br_17xl,
    left: 23,
  },
  rectangleView: {
    top: 345,
    shadowOpacity: 1,
    elevation: 2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: Color.white,
    width: 356,
    borderRadius: Border.br_17xl,
    left: 23,
  },
  loginRegistrationPageActioChild1: {
    top: 495,
    shadowOpacity: 1,
    elevation: 2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: Color.white,
    width: 356,
    borderRadius: Border.br_17xl,
    left: 23,
  },
  loginRegistrationPageActioChild2: {
    top: 779,
    borderRadius: Border.br_xs,
    backgroundColor: Color.orange_100,
    width: 356,
    left: 24,
  },
  facebookNegative: {
    bottom: 337,
    left: 94,
    overflow: "hidden",
  },
  appleOriginal: {
    top: 436,
    left: 92,
    overflow: "hidden",
  },
  groupIcon: {
    top: 207,
    left: 43,
  },
  enterEMailAddress: {
    top: 205,
    left: 76,
    color: Color.darkgray,
    position: "absolute",
  },
  orContinueWith: {
    top: 279,
    left: 136,
    color: Color.black,
    position: "absolute",
  },
  notRegistered: {
    left: 109,
    color: Color.black,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.bodyLargeBold_size,
    textAlign: "left",
  },
  signUp1: {
    color: "#007aff",
  },
  signUp: {
    left: 244,
  },
  continueWithApple: {
    top: 435,
    left: 139,
    fontWeight: "500",
    color: Color.black,
  },
  continueWithGoogle: {
    top: 360,
    left: 139,
    fontWeight: "500",
    color: Color.black,
  },
  continueWithFacebook: {
    top: 510,
    left: 130,
    color: Color.black,
  },
  continue: {
    top: 794,
    left: 164,
    color: Color.steelblue_100,
  },
  loginRegistrationPageActioChild3: {
    left: 0,
  },
  loginRegistrationPageActioChild4: {
    left: 281,
  },
  mdigoogleIcon: {
    top: 359,
    left: 90,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  loginRegistrationPageActio: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.seashell_100,
    flex: 1,
    width: "100%",
    height: 870,
    overflow: "hidden",
  },
});

export default LoginRegistrationPageActio;
