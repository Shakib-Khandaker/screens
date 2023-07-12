import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const FeaturedSection = () => {
  return (
    <View style={styles.featuredParent}>
      <Text style={[styles.featured, styles.featuredTypo]}>Featured</Text>
      <View style={styles.itemParent}>
        <View style={styles.itemLayout}>
          <Image
            style={styles.bgIcon}
            contentFit="cover"
            source={require("../assets/bg.png")}
          />
          <Text style={[styles.oasisFreetown, styles.featuredTypo]}>{`Oasis
Freetown`}</Text>
          <View style={styles.rate}>
            <Text style={styles.text}>5.0</Text>
            <Image
              style={[styles.rateChild, styles.rateLayout]}
              contentFit="cover"
              source={require("../assets/star-1.png")}
            />
          </View>
        </View>
        <View style={[styles.item1, styles.itemLayout]}>
          <Image
            style={styles.bgIcon}
            contentFit="cover"
            source={require("../assets/bg1.png")}
          />
          <Text style={[styles.oasisFreetown, styles.featuredTypo]}>
            <Text style={styles.vanityLoungeBar}>{`Vanity Lounge Bar
`}</Text>
            Freetown
          </Text>
          <View style={styles.rate}>
            <Text style={styles.text}>4.5</Text>
            <Image
              style={[styles.rateItem, styles.rateLayout]}
              contentFit="cover"
              source={require("../assets/star-1.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  featuredTypo: {
    textAlign: "left",
    fontSize: FontSize.bodyLargeBold_size,
    color: Color.black,
    left: 0,
    position: "absolute",
  },
  rateLayout: {
    height: 20,
    width: 20,
    borderRadius: Border.br_12xs,
    position: "absolute",
  },
  itemLayout: {
    height: 306,
    width: 210,
  },
  featured: {
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    top: 0,
  },
  bgIcon: {
    height: 250,
    width: 210,
    left: 0,
    top: 0,
    position: "absolute",
  },
  oasisFreetown: {
    top: 258,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
  },
  text: {
    left: 22,
    fontSize: FontSize.bodyMediumBold_size,
    fontWeight: "600",
    fontFamily: FontFamily.title2,
    textAlign: "right",
    color: Color.black,
    top: 0,
    position: "absolute",
  },
  rateChild: {
    top: 2,
    left: 3,
  },
  rate: {
    top: 271,
    left: 167,
    width: 43,
    height: 21,
    position: "absolute",
  },
  vanityLoungeBar: {
    textDecoration: "underline",
  },
  rateItem: {
    left: 0,
    top: 0,
  },
  item1: {
    marginLeft: 16,
  },
  itemParent: {
    top: 36,
    flexDirection: "row",
    left: 0,
    position: "absolute",
  },
  featuredParent: {
    top: 158,
    left: 12,
    width: 436,
    height: 342,
    position: "absolute",
  },
});

export default FeaturedSection;
