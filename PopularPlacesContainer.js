import { useNavigation } from "@react-navigation/native";
import React, { useMemo } from "react";

import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";
const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const PopularPlacesContainer = ({
  imageIds,
  imageDimensions,
  cofeeTop,
  cofeeLeft,
  epplaceBackgroundColor,
  propColor,
  propBackgroundColor,
  propColor1,
}) => {
  const tabsStyle = useMemo(() => {
    return {
      ...getStyleValue("top", cofeeTop),
      ...getStyleValue("left", cofeeLeft),
    };
  }, [cofeeTop, cofeeLeft]);

  const hotelStyle = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", epplaceBackgroundColor),
    };
  }, [epplaceBackgroundColor]);

  const hotel1Style = useMemo(() => {
    return {
      ...getStyleValue("color", propColor),
    };
  }, [propColor]);

  const marketStyle = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", propBackgroundColor),
    };
  }, [propBackgroundColor]);

  const restaurantStyle = useMemo(() => {
    return {
      ...getStyleValue("color", propColor1),
    };
  }, [propColor1]);
  const navigation = useNavigation();

  return (
    <View style={[styles.tabs, tabsStyle]}>
       <Pressable  onPress={() => navigation.navigate("Home")}  options={{ headerShown: false }}>
      <View style={[styles.hotel, hotelStyle]}>
        <Image
          style={styles.vuesaxlinearhouse2Icon}
          contentFit="cover"
          source={imageIds}
        />
        <Text style={[styles.hotel1, styles.hotel1Typo, hotel1Style]}>
          Hotel
        </Text>
      </View>
      </Pressable>
      <Pressable  onPress={() => navigation.navigate("Restaurant")}  options={{ headerShown: false }}>
      <View style={[styles.market, styles.cofeeSpaceBlock, marketStyle]}>
        <Image
          style={styles.materialSymbolsrestaurantMeIcon}
          contentFit="cover"
          source={imageDimensions}
        />
        <Text style={[styles.restaurant, styles.hotel1Typo, restaurantStyle]}>
          Restaurant
        </Text>
      </View>
      </Pressable>
      <View style={[styles.cofee, styles.cofeeSpaceBlock]}>
        <Image
          style={styles.epplaceIcon}
          contentFit="cover"
          source={require("../assets/epplace.png")}
        />
        <Text style={[styles.popularPlaces, styles.hotel1Typo]}>
          Popular Places
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  hotel1Typo: {
    marginLeft: 8,
    textAlign: "left",
    fontFamily: FontFamily.bodyMediumMedium,
    fontWeight: "500",
    lineHeight: 21,
    fontSize: FontSize.bodyMediumBold_size,
  },
  cofeeSpaceBlock: {
    marginLeft: 12,
    alignItems: "center",
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_xs,
    borderRadius: Border.br_5xs,
    flexDirection: "row",
  },
  vuesaxlinearhouse2Icon: {
    width: 20,
    height: 20,
  },
  hotel1: {
    color: Color.black,
    flex: 1,
    marginLeft: 8,
    textAlign: "left",
    fontFamily: FontFamily.bodyMediumMedium,
    fontWeight: "500",
    lineHeight: 21,
    fontSize: FontSize.bodyMediumBold_size,
  },
  hotel: {
    width: 101,
    alignItems: "center",
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_xs,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.whitesmoke,
    flexDirection: "row",
  },
  materialSymbolsrestaurantMeIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  restaurant: {
    color: Color.white,
    width: 73,
  },
  market: {
    backgroundColor: Color.orange_100,
    width: 125,
  },
  epplaceIcon: {
    width: 32,
    height: 16,
    overflow: "hidden",
  },
  popularPlaces: {
    color: Color.gray_100,
    flex: 1,
    marginLeft: 8,
    textAlign: "left",
    fontFamily: FontFamily.bodyMediumMedium,
    fontWeight: "500",
    lineHeight: 21,
    fontSize: FontSize.bodyMediumBold_size,
  },
  cofee: {
    width: 186,
    backgroundColor: Color.whitesmoke,
    marginLeft: 12,
  },
  tabs: {
    position: "absolute",
    top: 112,
    left: 0,
    width: 406,
    flexDirection: "row",
  },
});

export default PopularPlacesContainer;
