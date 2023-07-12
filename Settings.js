import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const Settings = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.settings}>
      <Image
        style={styles.footerIcon}
        contentFit="cover"
        source={require("../assets/footer1.png")}
      />
      <Image
        style={styles.settingsChild}
        contentFit="cover"
        source={require("../assets/ellipse-4.png")}
      />
     
      <Text style={[styles.logOut, styles.logOutFlexBox]}>Log Out</Text>
      <Pressable
        style={[styles.myBookings, styles.myBookingsPosition]}
        onPress={() => navigation.navigate("MyBookings")}
      >
        <Text style={[styles.myBookings1, styles.logOutFlexBox]}>
          My bookings
        </Text>
      </Pressable>
      <Text style={[styles.secuirity, styles.profilePosition]}>Secuirity</Text>
      <Text style={[styles.aqosuwaFrimps, styles.logOutFlexBox]}>
        Aqosuwa Frimps
      </Text>
      <Pressable
        style={[styles.notifications, styles.myBookingsPosition]}
        onPress={() => navigation.navigate("Notifications")}
      >
        <Text style={[styles.myBookings1, styles.logOutFlexBox]}>
          Notifications
        </Text>
      </Pressable>
      <Text style={[styles.helpCenter, styles.myBookingsPosition]}>
        Help Center
      </Text>
      <Pressable
        style={[styles.profile, styles.profilePosition]}
        onPress={() => navigation.navigate("Profile")}
      >
        <Text style={[styles.myBookings1, styles.logOutFlexBox]}>Profile</Text>
      </Pressable>
      <Pressable
        style={[styles.payments, styles.logOutPosition]}
        onPress={() => navigation.navigate("PaymentsStripedescription")}
      >
        <Text style={[styles.myBookings1, styles.logOutFlexBox]}>Payments</Text>
      </Pressable>
      <View style={styles.topNavigation}>
        <View style={[styles.back, styles.backBorder]}>
          <Image
            style={[styles.iconly, styles.iconlyLayout]}
            contentFit="cover"
            source={require("../assets/iconly.png")}
          />
        </View>
        <Text style={styles.topBar}>Profile</Text>
        <View style={styles.backBorder}>
          <Image
            style={styles.iconlyLayout}
            contentFit="cover"
            source={require("../assets/vuesaxlinearmore.png")}
          />
        </View>
      </View>
      <View style={[styles.settingsItem, styles.settingsLayout]} />
      <View style={[styles.settingsInner, styles.settingsLayout]} />
    </View>
  );
};

const styles = StyleSheet.create({
  logOutFlexBox: {
    textAlign: "center",
    color: Color.black,
    letterSpacing: 0,
  },
  myBookingsPosition: {
    left: 61,
    position: "absolute",
  },
  profilePosition: {
    left: 62,
    position: "absolute",
  },
  logOutPosition: {
    left: 64,
    position: "absolute",
  },
  backBorder: {
    padding: Padding.p_5xs,
    borderWidth: 1,
    borderColor: "#ededed",
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    flexDirection: "row",
  },
  iconlyLayout: {
    height: 24,
    width: 24,
  },
  settingsLayout: {
    height: 2,
    width: 277,
    borderTopWidth: 2,
    borderColor: "rgba(186, 186, 190, 0.66)",
    borderStyle: "solid",
    left: 64,
    position: "absolute",
  },
  footerIcon: {
    top: 791,
    left: 0,
    width: 403,
    height: 79,
    position: "absolute",
  },
  settingsChild: {
    top: 129,
    left: 126,
    width: 140,
    height: 140,
    position: "absolute",
  },
  logOut: {
    top: 690,
    fontFamily: FontFamily.bodyMediumMedium,
    fontWeight: "500",
    fontSize: FontSize.bodyMediumBold_size,
    color: Color.black,
    letterSpacing: 0,
    left: 64,
    position: "absolute",
  },
  myBookings1: {
    fontFamily: FontFamily.bodyMediumMedium,
    fontWeight: "500",
    fontSize: FontSize.bodyMediumBold_size,
    color: Color.black,
    letterSpacing: 0,
  },
  myBookings: {
    top: 338,
  },
  secuirity: {
    top: 561,
    textAlign: "center",
    color: Color.black,
    letterSpacing: 0,
    fontFamily: FontFamily.bodyMediumMedium,
    fontWeight: "500",
    fontSize: FontSize.bodyMediumBold_size,
  },
  aqosuwaFrimps: {
    top: 277,
    left: 118,
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    fontFamily: FontFamily.title2,
    color: Color.black,
    letterSpacing: 0,
    position: "absolute",
  },
  notifications: {
    top: 513,
  },
  helpCenter: {
    top: 609,
    textAlign: "center",
    color: Color.black,
    letterSpacing: 0,
    fontFamily: FontFamily.bodyMediumMedium,
    fontWeight: "500",
    fontSize: FontSize.bodyMediumBold_size,
  },
  profile: {
    top: 465,
  },
  payments: {
    top: 387,
  },
  iconly: {
    display: "none",
  },
  back: {
    backgroundColor: Color.white,
    display: "none",
  },
  topBar: {
    fontSize: FontSize.bodyLargeBold_size,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.bodyMediumBold,
    color: Color.gray_400,
    textAlign: "left",
  },
  topNavigation: {
    top: 48,
    left: 38,
    width: 327,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_xs,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    position: "absolute",
  },
  settingsItem: {
    top: 434,
  },
  settingsInner: {
    top: 659,
  },
  settings: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.seashell_100,
    flex: 1,
    width: "100%",
    height: 870,
    overflowY: "scroll",
  },
});

export default Settings;
