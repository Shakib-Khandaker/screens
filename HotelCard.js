import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const HotelCard = () => {
  return (
    <View style={[styles.card, styles.cardFlexBox]}>
      <View style={styles.image}>
        <Image
          style={styles.image7Icon}
          contentFit="cover"
          source={require("../assets/rose.jpg")}
        />
      </View>
      <View style={styles.information}>
        <View style={styles.namePrice}>
          <Text style={styles.asteriaHotel}>RoseView hotel</Text>
          <Text style={styles.night}>
            <Text style={styles.text}>
              <Text style={styles.text1}>$150</Text>
              <Text style={styles.text2}>{` `}</Text>
            </Text>
            <Text style={styles.night1Typo}>/night</Text>
          </Text>
        </View>
        <Text style={[styles.wiloraNt0872, styles.night1Typo]}>
         Uposhohor, Sylhet
        </Text>
        <View style={[styles.starParent, styles.cardFlexBox]}>
          <View style={styles.star}>
            <Image
              style={styles.antDesignstarFilledIcon}
              contentFit="cover"
              source={require("../assets/antdesignstarfilled1.png")}
            />
          </View>
          <View style={styles.star1}>
            <Image
              style={styles.antDesignstarFilledIcon}
              contentFit="cover"
              source={require("../assets/antdesignstarfilled1.png")}
            />
          </View>
          <View style={styles.star1}>
            <Image
              style={styles.antDesignstarFilledIcon}
              contentFit="cover"
              source={require("../assets/antdesignstarfilled1.png")}
            />
          </View>
          <View style={styles.star1}>
            <Image
              style={styles.antDesignstarFilledIcon}
              contentFit="cover"
              source={require("../assets/antdesignstarfilled1.png")}
            />
          </View>
          <View style={styles.star1}>
            <Image
              style={styles.antDesignstarFilledIcon}
              contentFit="cover"
              source={require("../assets/antdesignstarfilled1.png")}
            />
          </View>
          <Text style={styles.text3}>5.0</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  night1Typo: {
    color: Color.gray_100,
    fontFamily: FontFamily.bodyMediumMedium,
    fontWeight: "500",
    lineHeight: 18,
    fontSize: FontSize.bodySmallMedium_size,
  },
  image7Icon: {
    top: 0,
    left: 0,
    width: 119,
    height: 110,
    position: "absolute",
  },
  image: {
    borderRadius: Border.br_9xs,
    width: 84,
    height: 84,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  asteriaHotel: {
    flex: 1,
    lineHeight: 21,
    textAlign: "left",
    color: Color.gray_400,
    fontFamily: FontFamily.bodyMediumBold,
    fontWeight: "700",
    fontSize: FontSize.bodyMediumBold_size,
  },
  text1: {
    fontFamily: FontFamily.bodyMediumBold,
    fontWeight: "700",
  },
  text2: {
    lineHeight: 20,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  text: {
    color: Color.orange_100,
    fontSize: FontSize.bodyMediumBold_size,
  },
  night: {
    width: 85,
    textAlign: "left",
    alignSelf: "stretch",
  },
  namePrice: {
    alignSelf: "stretch",
    flexDirection: "row",
  },
  wiloraNt0872: {
    marginTop: 8,
    textAlign: "left",
    alignSelf: "stretch",
  },
  antDesignstarFilledIcon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  star: {
    flexDirection: "row",
  },
  star1: {
    marginLeft: 8,
    flexDirection: "row",
  },
  text3: {
    marginLeft: 8,
    lineHeight: 18,
    fontSize: FontSize.bodySmallMedium_size,
    textAlign: "left",
    color: Color.gray_400,
    fontFamily: FontFamily.bodyMediumBold,
    fontWeight: "700",
  },
  starParent: {
    marginTop: 8,
  },
  information: {
    width: 203,
    marginLeft: 16,
  },
  card: {
    top: 609,
    left: 24,
    borderRadius: Border.br_xs,
    shadowColor: "rgba(18, 18, 18, 0.04)",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowRadius: 16,
    elevation: 16,
    shadowOpacity: 1,
    padding: Padding.p_xs,
    backgroundColor: Color.white,
    position: "absolute",
  },
});

export default HotelCard;
