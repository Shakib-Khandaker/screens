import React, { useMemo } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const PurchaseContainer = ({
  paymentMethodText,
  paymentMethodImageUrl,
  paymentMethodTextLabel,
  paymentMethodName,
  propTop,
  propWidth,
  propRight,
}) => {
  const purchaseStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  const containerStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
      ...getStyleValue("right", propRight),
    };
  }, [propWidth, propRight]);

  return (
    <View style={[styles.purchase, purchaseStyle]}>
      <Image
        style={[styles.backgroundsWhite, styles.backgroundsWhiteLayout]}
        contentFit="cover"
        source={paymentMethodText}
      />
      <Image
        style={[styles.controlsSmallArrowFw, styles.backgroundsWhiteLayout]}
        contentFit="cover"
        source={paymentMethodImageUrl}
      />
      <View style={[styles.container, containerStyle]}>
        <View style={[styles.muted, styles.mutedPosition]}>
          <Text style={[styles.subtitle, styles.titlePosition]}>
            {paymentMethodTextLabel}
          </Text>
        </View>
        <Text style={[styles.title, styles.titlePosition]}>
          {paymentMethodName}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundsWhiteLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  mutedPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
  },
  titlePosition: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.openSansRegular,
    letterSpacing: 0,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  backgroundsWhite: {
    height: "100%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
    top: "0%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  controlsSmallArrowFw: {
    height: "51.61%",
    width: "8.53%",
    top: "24.19%",
    right: "0.8%",
    bottom: "24.19%",
    left: "90.67%",
  },
  subtitle: {
    fontSize: FontSize.size_mini,
    lineHeight: 20,
  },
  muted: {
    height: "45.45%",
    top: "54.55%",
    opacity: 0.48,
    bottom: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  title: {
    fontSize: FontSize.size_mid,
    lineHeight: 22,
  },
  container: {
    height: "70.97%",
    width: "38.67%",
    top: "12.9%",
    right: "45.33%",
    bottom: "16.13%",
    left: "16%",
    position: "absolute",
  },
  purchase: {
    top: 184,
    left: 13,
    backgroundColor: Color.aliceblue,
    width: 375,
    height: 62,
    position: "absolute",
  },
});

export default PurchaseContainer;
