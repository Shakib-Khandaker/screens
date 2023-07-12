import React, { useMemo } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Container0941 = ({ productId, propTop, propLeft }) => {
  const topBarStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propLeft]);

  return (
    <View style={[styles.topBar, styles.textFlexBox, topBarStyle]}>
      <View>
        <Text style={[styles.currentLocation1, styles.lungiFreeTownTypo]}>
          Current location
        </Text>
        <View style={[styles.location, styles.textFlexBox]}>
          <Image
            style={styles.vuesaxboldlocationIcon}
            contentFit="cover"
            source={require("../assets/vuesaxboldlocation.png")}
          />
          <View style={[styles.text, styles.textFlexBox]}>
            <Text style={[styles.lungiFreeTown, styles.lungiFreeTownTypo]}>
              Lungi Free Town,
            </Text>
            <Image
              style={styles.vuesaxboldlocationIcon}
              contentFit="cover"
              source={require("../assets/vuesaxlineararrowdown.png")}
            />
          </View>
        </View>
      </View>
      <Image
        style={styles.notificationIcon}
        contentFit="cover"
        source={productId}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  lungiFreeTownTypo: {
    textAlign: "left",
    fontFamily: FontFamily.bodyMediumMedium,
    fontWeight: "500",
  },
  currentLocation1: {
    fontSize: FontSize.bodySmallMedium_size,
    lineHeight: 18,
    color: Color.gray_100,
  },
  vuesaxboldlocationIcon: {
    width: 20,
    height: 20,
  },
  lungiFreeTown: {
    fontSize: FontSize.bodyMediumBold_size,
    lineHeight: 21,
    color: Color.gray_400,
  },
  text: {
    marginLeft: 8,
  },
  location: {
    marginTop: 4,
  },
  notificationIcon: {
    borderRadius: Border.br_9xs,
    width: 40,
    height: 40,
    overflow: "hidden",
    marginLeft: 121,
  },
  topBar: {
    position: "absolute",
    top: 44,
    left: 32,
    width: 341,
  },
});

export default Container0941;
