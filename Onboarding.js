import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Onboarding = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.onboarding}
      onPress={() => navigation.navigate("Onboarding1")}
    >
      <ImageBackground
        style={styles.icon}
        resizeMode="cover"
        source={require("../assets/onboarding.png")}
      >
        <View style={styles.onboardingChild} />
        <Text
          style={[styles.reserveASeat, styles.reservationText]}
        >{`reserve a seat at 
your favorite
restaurant`}</Text>
        <Text style={[styles.reservation, styles.reservationText]}>
          Reservation
        </Text>
        <Image
          style={styles.onboardingItem}
          contentFit="cover"
          source={require("../assets/group-729.png")}
        />
        <Text style={styles.skip}>Skip</Text>
      </ImageBackground>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  reservationText: {
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
  onboardingChild: {
    top: 0,
    left: 0,
    backgroundColor: Color.steelblue_300,
    width: 402,
    position: "absolute",
    height: 870,
  },
  reserveASeat: {
    top: 669,
    left: 45,
    fontSize: FontSize.size_xl,
    lineHeight: 30,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
  },
  reservation: {
    top: 628,
    left: 31,
    fontSize: FontSize.size_11xl,
    lineHeight: 45,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
  },
  onboardingItem: {
    top: 821,
    left: 173,
    width: 55,
    height: 15,
    position: "absolute",
  },
  skip: {
    top: 818,
    left: 330,
    fontSize: FontSize.bodyLargeBold_size,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.orange_100,
    textAlign: "left",
    position: "absolute",
  },
  icon: {
    borderRadius: Border.br_11xl,
    flex: 1,
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  onboarding: {
    height: 870,
    width: "100%",
  },
});

export default Onboarding;
