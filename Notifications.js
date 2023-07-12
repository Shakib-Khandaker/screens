import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Notifications = () => {
  return (
    <View style={styles.notifications}>
      <View style={[styles.top, styles.topLayout]}>
        <View style={[styles.arrowParent, styles.arrowPosition]}>
          <Image
            style={[styles.arrowIcon, styles.arrowPosition]}
            contentFit="cover"
            source={require("../assets/arrow.png")}
          />
          <Text style={styles.label}>Notifications</Text>
        </View>
      </View>
    
      <Text style={styles.generalNotification}>General Notification</Text>
      <Text style={[styles.reviews, styles.tipsLayout]}>Reviews</Text>
      <Text style={[styles.messages, styles.tipsLayout]}>Messages</Text>
      <Text style={[styles.tips, styles.tipsLayout]}>Tips</Text>
      <Text style={[styles.appUpdate, styles.soundsTypo]}>App Update</Text>
      <Text style={[styles.payments, styles.soundsTypo]}>Payments</Text>
      <Text style={[styles.spcialOffers, styles.soundsTypo]}>
        Spcial Offers
      </Text>
      <Text style={[styles.vibrate, styles.soundsTypo]}>Vibrate</Text>
      <Text style={[styles.sounds, styles.soundsTypo]}>Sounds</Text>
      <Image
        style={[styles.icbaselineToggleOnIcon, styles.icbaselineIconLayout1]}
        contentFit="cover"
        source={require("../assets/icbaselinetoggleon.png")}
      />
      <Image
        style={[styles.icbaselineToggleOnIcon1, styles.icbaselineIconLayout1]}
        contentFit="cover"
        source={require("../assets/icbaselinetoggleon.png")}
      />
      <Image
        style={[styles.icbaselineToggleOnIcon2, styles.icbaselineIconLayout1]}
        contentFit="cover"
        source={require("../assets/icbaselinetoggleon.png")}
      />
      <Image
        style={[styles.icbaselineToggleOnIcon3, styles.icbaselineIconLayout1]}
        contentFit="cover"
        source={require("../assets/icbaselinetoggleon.png")}
      />
      <Image
        style={[styles.icbaselineToggleOnIcon4, styles.icbaselineIconLayout1]}
        contentFit="cover"
        source={require("../assets/icbaselinetoggleon.png")}
      />
      <Image
        style={[styles.icbaselineToggleOffIcon, styles.icbaselineIconLayout]}
        contentFit="cover"
        source={require("../assets/icbaselinetoggleoff.png")}
      />
      <Image
        style={[styles.icbaselineToggleOffIcon1, styles.icbaselineIconLayout]}
        contentFit="cover"
        source={require("../assets/icbaselinetoggleoff.png")}
      />
      <Image
        style={[styles.icbaselineToggleOnIcon5, styles.icbaselineIconLayout1]}
        contentFit="cover"
        source={require("../assets/icbaselinetoggleon.png")}
      />
      <Image
        style={[styles.icbaselineToggleOffIcon2, styles.icbaselineIconLayout]}
        contentFit="cover"
        source={require("../assets/icbaselinetoggleoff.png")}
      />
      <View style={styles.homeIndicator}>
        <View style={styles.container} />
        <View style={styles.indicator} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topLayout: {
    height: 22,
    width: 123,
  },
  arrowPosition: {
    left: 0,
    marginTop: -11,
    top: "50%",
    position: "absolute",
  },
  tipsLayout: {
    height: 26,
    width: 151,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.black,
    lineHeight: 22,
    letterSpacing: 0,
    left: 21,
    position: "absolute",
  },
  soundsTypo: {
    width: 151,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.black,
    lineHeight: 22,
    letterSpacing: 0,
    left: 21,
    position: "absolute",
  },
  icbaselineIconLayout1: {
    height: 40,
    width: 40,
    left: 341,
    position: "absolute",
    overflow: "hidden",
  },
  icbaselineIconLayout: {
    opacity: 0.4,
    height: 40,
    width: 40,
    position: "absolute",
    overflow: "hidden",
  },
  arrowIcon: {
    width: 12,
    height: 21,
  },
  label: {
    left: 18,
    fontSize: FontSize.size_mid,
    fontWeight: "600",
    fontFamily: FontFamily.title2,
    textAlign: "left",
    color: Color.black,
    lineHeight: 22,
    letterSpacing: 0,
    marginTop: -11,
    top: "50%",
    position: "absolute",
  },
  arrowParent: {
    height: 22,
    width: 123,
  },
  top: {
    marginTop: -379,
    left: 21,
    top: "50%",
    height: 22,
    width: 123,
    position: "absolute",
  },
  generalNotification: {
    top: 123,
    width: 194,
    height: 27,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.black,
    lineHeight: 22,
    letterSpacing: 0,
    left: 21,
    position: "absolute",
  },
  reviews: {
    top: 751,
  },
  messages: {
    top: 673,
  },
  tips: {
    top: 595,
  },
  appUpdate: {
    top: 516,
    height: 27,
  },
  payments: {
    top: 437,
    height: 27,
  },
  spcialOffers: {
    top: 358,
    height: 27,
  },
  vibrate: {
    top: 281,
    height: 25,
  },
  sounds: {
    top: 202,
    height: 27,
  },
  icbaselineToggleOnIcon: {
    top: 110,
  },
  icbaselineToggleOnIcon1: {
    top: 189,
  },
  icbaselineToggleOnIcon2: {
    top: 347,
  },
  icbaselineToggleOnIcon3: {
    top: 426,
  },
  icbaselineToggleOnIcon4: {
    top: 505,
  },
  icbaselineToggleOffIcon: {
    top: 592,
    left: 342,
  },
  icbaselineToggleOffIcon1: {
    top: 737,
    left: 341,
    opacity: 0.4,
  },
  icbaselineToggleOnIcon5: {
    top: 663,
  },
  icbaselineToggleOffIcon2: {
    top: 274,
    left: 341,
    opacity: 0.4,
  },
  container: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  indicator: {
    height: "14.71%",
    width: "35.73%",
    top: "55.88%",
    right: "32%",
    bottom: "29.41%",
    left: "32.27%",
    borderRadius: Border.br_10xs_5,
    backgroundColor: Color.darkslategray_400,
    position: "absolute",
  },
  homeIndicator: {
    top: 817,
    left: 13,
    width: 375,
    height: 34,
    position: "absolute",
  },
  notifications: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.linen,
    flex: 1,
    marginTop:50,
    overflowY: "scroll",
    width: "100%",
  },
});

export default Notifications;
