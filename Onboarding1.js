import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const Onboarding1 = () => {
  return (
    <View style={styles.onboarding}>
      <Image
        style={styles.prideAppLogo1}
        contentFit="cover"
        source={require("../assets/pride-app-logo-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  prideAppLogo1: {
    width: 120,
    height: 119,
  },
  onboarding: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.seashell_100,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    paddingHorizontal: 141,
    paddingVertical: 375,
  },
});

export default Onboarding1;
