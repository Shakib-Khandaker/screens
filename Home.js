import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";
import Container0941 from "../components/Container0941";
import HotelCard from "../components/HotelCard";
import HotelContainer from "../components/HotelContainer";
import PopularPlacesContainer from "../components/PopularPlacesContainer";

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.home}>
      <HotelCard />
      <View style={[styles.titleSection, styles.titleFlexBox]}>
        <Text style={styles.popularHotels}>Popular Hotels</Text>
        <Text style={[styles.seeAll, styles.seeTypo]}>See all</Text>
      </View>
      <View style={[styles.card, styles.cardPosition]}>
        <Image
          style={styles.imageIcon}
          contentFit="cover"
          source={require("../assets/rose.jpg")}
        />
        <HotelContainer
          hotelName="Noorjahan Hotel"
          hotelAddress="Chowhatta Sylhet"
          hotelPrice="$150"
        />
      </View>
      <Pressable
        style={[styles.card1, styles.cardPosition]}
        onPress={() => navigation.navigate("HotelDetails")}
      >
        <Image
          style={styles.imageIcon}
          contentFit="cover"
        
            source={require('../assets/noorjahan.jpg')}
          
        />
        <HotelContainer
          hotelName="Rose View Hotel"
          hotelAddress="Uposhohor, Sylhet"
          hotelPrice="$132"
        />
      </Pressable>
      <View style={[styles.titleSection1, styles.titleFlexBox]}>
        <Text style={styles.popularHotels}>Nearby Hotels</Text>
        <Text style={[styles.seeAll1, styles.seeTypo]}>See all</Text>
      </View>
      <PopularPlacesContainer
        imageIds={require("../assets/vuesaxlinearhouse21.png")}
        imageDimensions={require("../assets/materialsymbolsrestaurantmenu1.png")}
        cofeeTop={135}
        cofeeLeft={24}
        epplaceBackgroundColor="#fe9e28"
        propColor="#fff"
        propBackgroundColor="#f5f5f5"
        propColor1="#878787"
      />
      <Container0941
        productId={require("../assets/notification1.png")}
        propTop={60}
        propLeft={24}
      />
      {/* <Image
       
        contentFit="cover"
        source={require("../assets/footer2.png")}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  titleFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: 327,
    left: 24,
    position: "absolute",
  },
  seeTypo: {
    fontFamily: FontFamily.bodyMediumMedium,
    fontWeight: "500",
    lineHeight: 21,
    fontSize: FontSize.bodyMediumBold_size,
    textAlign: "left",
  },
  cardPosition: {
    top: 236,
    position: "absolute",
  },
  popularHotels: {
    fontSize: FontSize.bodyLargeBold_size,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.bodySmallBold,
    color: Color.gray_400,
    textAlign: "left",
  },
  seeAll: {
    color: Color.orange_100,
  },
  titleSection: {
    top: 569,
  },
  imageIcon: {
    borderTopLeftRadius: Border.br_xs,
    borderTopRightRadius: Border.br_xs,
    width: 257,
    height: 209,
    overflow: "hidden",
  },
  card: {
    left: 318,
  },
  card1: {
    left: 24,
    top: 236,
  },
  seeAll1: {
    color: "#4c4ddc",
  },
  titleSection1: {
    top: 196,
  },
  footerIcon: {
    top: 791,
    left: 0,
    width: 403,
    height: 79,
    position: "absolute",
  },
  home: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.seashell_100,
    flex: 1,
    width: "100%",
   
    overflowY: "scroll",
   overflowX:"hidden"
  },
});

export default Home;
