import * as React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";
import CategorySection from "../components/CategorySection";
import Container0941 from "../components/Container0941";
import Container5 from "../components/Container5";
import FeaturedSection from "../components/FeaturedSection";
import PopularPlacesContainer from "../components/PopularPlacesContainer";
import RestaurantsContainer from "../components/RestaurantsContainer";

const Restaurant = () => {
  return (
    <View style={styles.restaurant}>
      <PopularPlacesContainer
        imageIds={require("../assets/vuesaxlinearhouse2.png")}
        imageDimensions={require("../assets/materialsymbolsrestaurantmenu.png")}
      />
      <Container0941 productId={require("../assets/notification.png")} />
      <FeaturedSection />
      <CategorySection />
      <Pressable         onPress={() => navigation.navigate("Restaurant")}>

      <Text style={styles.restaurants}>Restaurants</Text>
      </Pressable>
      <RestaurantsContainer />
      <Container5 />
      <Image
        style={styles.footerIcon}
        contentFit="cover"
        source={require("../assets/footer.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  restaurants: {
    top: 685,
    left: 12,
    fontSize: FontSize.bodyLargeBold_size,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.black,
    textAlign: "left",
    position: "absolute",
  },
  footerIcon: {
    top: 1096,
    left: 0,
    width: 403,
    height: 79,
    position: "absolute",
  },
  restaurant: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.seashell_100,
    flex: 1,
    width: "100%",
    overflowY: "scroll",
  },
});

export default Restaurant;
