import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const CategorySection = () => {
  return (
    <View style={styles.categoriesParent}>
      <Text style={styles.categories}>Categories</Text>
      <Image
        style={[styles.groupChild, styles.groupLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-555.png")}
      />
      <Image
        style={[styles.groupItem, styles.groupLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-556.png")}
      />
      <Image
        style={[styles.groupInner, styles.groupLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-557.png")}
      />
      <Image
        style={[styles.rectangleIcon, styles.groupLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-558.png")}
      />
      <Text style={[styles.dinner, styles.lunchTypo]}>Dinner</Text>
      <Text style={[styles.desert, styles.lunchTypo]}>Desert</Text>
      <Text style={[styles.lunch, styles.lunchTypo]}>Lunch</Text>
      <Text style={[styles.breakfast, styles.lunchTypo]}>Breakfast</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupLayout: {
    height: 68,
    width: 68,
    borderRadius: Border.br_3xs,
    top: 49,
    position: "absolute",
  },
  lunchTypo: {
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    top: 117,
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.bodyLargeBold_size,
    position: "absolute",
  },
  categories: {
    top: 0,
    left: 0,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.bodyLargeBold_size,
    position: "absolute",
  },
  groupChild: {
    left: 18,
  },
  groupItem: {
    left: 332,
  },
  groupInner: {
    left: 228,
  },
  rectangleIcon: {
    left: 122,
  },
  dinner: {
    left: 339,
  },
  desert: {
    left: 232,
  },
  lunch: {
    left: 129,
  },
  breakfast: {
    left: 14,
  },
  categoriesParent: {
    top: 526,
    left: 12,
    width: 400,
    height: 141,
    position: "absolute",
  },
});

export default CategorySection;
