import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { FlatList, Image, StyleSheet, View } from "react-native-web";
import rose from ".././assets/rose.jpg";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";
import HotelContainer from "../components/HotelContainer";
const HomeScreen = () => {
  const DATA=[
    {
      id:1,
      title:"Rose View Hotel",
      img:rose,
      review:5,
      price:"$1250",
      address:"Uposhohor,Sylhet"
    },
    {
      id:2,
      title:"Rose View Hotel",
      img:rose,
      review:5,
      price:"$1250",
      address:"Uposhohor,Sylhet"
    }
  ]
  const navigation = useNavigation();

  return (
    <View style={{flex:1}}>
     
      <FlatList
     horizontal={true}
    data={DATA}
    renderItem={item=>{
     return( <View style={{marginLeft:10,marginRight:20}}>
      <Image
        style={styles.imageIcon}
        contentFit="cover"
        source={rose}
      />
      <HotelContainer
        hotelName={item.title}
        hotelAddress={item.address}
        hotelPrice={item.price}
      />
    </View>)
    }}
    keyExtractor={(item) => item.id}
   
  />
   
    
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
    height: 870,
    overflowY: "scroll",
  },
});

export default HomeScreen;
