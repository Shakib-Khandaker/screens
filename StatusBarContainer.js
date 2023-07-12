import React, { useMemo } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const StatusBarContainer = ({ mobileSignalLeft }) => {
  const statusBar02TransparentStyle = useMemo(() => {
    return {
      ...getStyleValuerequire("..left", mobileSignalLeft),
    };
  }, [mobileSignalLeft]);

  return (
    <View style={[styles.statusBar02Transparent, statusBar02TransparentStyle]}>
      <View style={[styles.statusBarTime01Default, styles.textLayout]}>
        <Text style={[styles.text, styles.textLayout]}>09:41</Text>
      </View>
      <Image
        style={styles.batteryIcon}
        contentFit="cover"
        source={require("../assets/battery.png")}
      />
      <Image
        style={styles.wifiIcon}
        contentFit="cover"
        source={require("../assets/wifi.png")}
      />
      <Image
        style={styles.mobileSignalIcon}
        contentFit="cover"
        source={require("../assets/mobile-signal.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textLayout: {
    width: 54,
    position: "absolute",
  },
  text: {
    top: 2,
    fontSize: FontSize.bodyMediumBold_size,
    letterSpacing: 0,
    fontWeight: "900",
    fontFamily: FontFamily.poppinsBlack,
    color: Color.darkslategray_100,
    textAlign: "center",
    height: 17,
    left: 0,
  },
  statusBarTime01Default: {
    top: 12,
    left: 21,
    height: 21,
    overflow: "hidden",
  },
  batteryIcon: {
    top: 17,
    right: 16,
    width: 24,
    height: 11,
    position: "absolute",
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  mobileSignalIcon: {
    width: 17,
    height: 11,
  },
  statusBar02Transparent: {
    top: 0,
    width: 402,
    height: 44,
    overflow: "hidden",
    left: 0,
    position: "absolute",
  },
});

export default StatusBarContainer;
