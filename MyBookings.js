import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";
import OasisContainer from "../components/OasisContainer";
import RadissonBluContainer from "../components/RadissonBluContainer";

const MyBookings = () => {
  return (
    <View style={styles.myBookings}>
      <View style={styles.topNavigation}>
        <View style={[styles.back, styles.backBorder]}>
          <Image
            style={styles.iconly}
            contentFit="cover"
            source={require("../assets/iconly.png")}
          />
        </View>
        <Text style={styles.topBar}>My Bookings</Text>
        <View style={styles.backBorder}>
          <Image
            style={styles.iconly}
            contentFit="cover"
            source={require("../assets/vuesaxlinearmore.png")}
          />
        </View>
      </View>
      <View style={styles.activeParent}>
        <Text style={[styles.active, styles.activeTypo]}>Active</Text>
        <Text style={[styles.completed, styles.activeTypo]}>Completed</Text>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <View style={[styles.groupItem, styles.groupLayout]} />
      </View>
      <RadissonBluContainer />
      <OasisContainer />
      <View style={styles.homeIndicator}>
        <View style={styles.container} />
        <View style={styles.indicator} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backBorder: {
    padding: Padding.p_5xs,
    borderWidth: 1,
    borderColor: "#ededed",
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    flexDirection: "row",
  },
  activeTypo: {
    fontFamily: FontFamily.poppinsRegular,
    top: 0,
    textAlign: "left",
    lineHeight: 24,
    fontSize: FontSize.bodyLargeBold_size,
    position: "absolute",
  },
  groupLayout: {
    height: 2,
    width: 139,
    borderTopWidth: 2,
    top: 32,
    borderStyle: "solid",
    position: "absolute",
  },
  iconly: {
    width: 24,
    height: 24,
  },
  back: {
    backgroundColor: Color.white,
  },
  topBar: {
    fontWeight: "700",
    fontFamily: FontFamily.bodyMediumBold,
    color: Color.gray_400,
    textAlign: "left",
    lineHeight: 24,
    fontSize: FontSize.bodyLargeBold_size,
  },
  topNavigation: {
    top: 61,
    left: 37,
    width: 327,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_xs,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    position: "absolute",
  },
  active: {
    left: 40,
    color: Color.orange_100,
  },
  completed: {
    left: 143,
    color: Color.gray_100,
  },
  groupChild: {
    left: -1,
    borderColor: "#fe9e28",
  },
  groupItem: {
    left: 133,
    borderColor: "#c5c5c5",
  },
  activeParent: {
    top: 142,
    left: 67,
    width: 271,
    height: 33,
    position: "absolute",
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
    top: 800,
    left: 4,
    width: 375,
    height: 34,
    position: "absolute",
  },
  myBookings: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.seashell_100,
    flex: 1,
    height: 870,
    overflow: "hidden",
    width: "100%",
  },
});

export default MyBookings;
