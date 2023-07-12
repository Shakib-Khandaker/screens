import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import tabs from ".././assets/Tabs.png";
import topnav from ".././assets/topnav.png";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";
const HotelDetails = () => {
  const navigation = useNavigation();

  return (
  
       <View style={{padding:30, backgroundColor: '#FEF8F2',}}>
        <Image source={topnav}style={{width:"100%",height:30,marginBottom:20}}/>
        <View>
        <Image
          style={{width:"100%",height:250,borderRadius:20,marginBottom:20}}
          contentFit="cover"
          source={require("../assets/rose.jpg")}
        />
        </View>
        <Image source={tabs}style={{width:"100%",height:30,marginBottom:20}}/>
        <View>
            <View style={{display:"flex",flexDirection:"row",justifyContent:'space-between',marginTop:"20px"}}>
                <Text style={{fontSize:18,fontWeight:"bold",flex:2}}>Rose View Hotel</Text>
                <View style={{flex:1}}>
                    <Text style={{color:"#FE9E28",fontWeight:"bold"}}>$132<Text >/night</Text></Text>
                   
                </View>
            </View>
        </View>
        <View style={{display:"flex",flexDirection:"row",marginTop:20}}>
          
            <Text style={{flex:3,fontWeight:"bold",color:"grey"}}>Uposhohor, Sylhet</Text>
        </View>
        <View>
            <Text style={{fontWeight:"bold",marginTop:20,marginBottom:20}}>Description</Text>
            <Text>Rose View Hotel Rose View Hotel Rose View Hotel Rose View Hotel Rose View Hotel Rose View Hotel Rose View Hotel Rose View Hotel Rose View Hotel<Text style={{color:"#FE9E28",}}>Read More...</Text></Text>
        </View>
        <View>
        <Text style={{fontWeight:"bold",marginTop:20,marginBottom:20}}>Preview</Text>
        <View style={{marginTop:20,display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
            <Image  source={require("../assets/rose.jpg")} style={{flex:1,borderRaidus:10,marginRight:20}}/>
            <Image  source={require("../assets/rose.jpg")} style={{flex:1,borderRaidus:10,marginRight:20}}/>
            <Image  source={require("../assets/rose.jpg")} style={{flex:1,width:"100%",height:50,borderRaidus:10,marginRight:20}}/>
        </View>
        <View style={{marginTop:20}}>
           <Button title="Book Now" color="#FE9E28" style={{width:"100%"}}   onPress={() => navigation.navigate("Calendar")}/>
        </View>
        </View>
    </View>
 
  )
      
};
const styles = StyleSheet.create({
    container: {
      flex:1,
      padding:30,
      backgroundColor: '#FEF8F2',
      alignItems: 'center',
      padding:25,
      justifyContent: 'center',
    },
    imageLayout: {
      
        top: 636,
        height: 82,
        backgroundColor: Color.white,
        position: "absolute",
        overflow: "hidden",
      },
      image9IconPosition: {
        left: 0,
        top: 0,
        position: "absolute",
      },
      tabsFlexBox: {
        alignItems: "center",
        flexDirection: "row",
      },
      previewTypo: {
        fontFamily: FontFamily.bodyMediumBold,
        fontWeight: "700",
      },
      tabsPosition: {
        width: 355,
        left: 24,
        position: "absolute",
      },
      aliceTypo1: {
        lineHeight: 18,
        fontSize: FontSize.bodySmallMedium_size,
        textAlign: "left",
      },
      aliceTypo: {
        fontFamily: FontFamily.bodySmallRegular,
        color: Color.gray_100,
      },
      text1Typo: {
        lineHeight: 24,
        fontSize: FontSize.bodyLargeBold_size,
        fontFamily: FontFamily.bodyMediumBold,
        fontWeight: "700",
      },
      text4Typo: {
        fontFamily: FontFamily.bodyMediumMedium,
        fontWeight: "500",
      },
      cofeeSpaceBlock: {
        paddingVertical: Padding.p_5xs,
        paddingHorizontal: Padding.p_xs,
        backgroundColor: Color.ghostwhite,
        alignItems: "center",
        flexDirection: "row",
        borderRadius: Border.br_5xs,
      },
      iconLayout: {
        height: 20,
        width: 20,
      },
      backBorder: {
        padding: Padding.p_5xs,
        borderWidth: 1,
        borderColor: "#ededed",
        borderStyle: "solid",
        flexDirection: "row",
        borderRadius: Border.br_5xs,
      },
      image9Icon: {
        width: 98,
        
      },
      image: {
        width: 103,
        height: 82,
        backgroundColor: Color.white,
        left: 24,
      },
      image1: {
        left: 152,
        width: 102,
        height: 82,
        backgroundColor: Color.white,
      },
      image9Icon2: {
        width: 112,
        height: 92,
      },
      image2: {
        left: 279,
        width: 104,
        height: 82,
        backgroundColor: Color.white,
      },
      hoteldetailChild: {
        top: 691,
        width: 326,
        height: 64,
        left: 24,
        position: "absolute",
      },
      bookingNow: {
        color: Color.steelblue_100,
        textAlign: "center",
        lineHeight: 21,
        fontFamily: FontFamily.bodyMediumBold,
        fontSize: FontSize.bodyMediumBold_size,
      },
      button: {
        top: 755,
        left: 26,
        borderRadius: Border.br_xs,
        backgroundColor: Color.orange_100,
        width: "100%",
        height: 59,
        paddingTop: Padding.p_base,
        paddingRight: Padding.p_base,
        paddingBottom: Padding.p_base,
        justifyContent: "center",
        position: "absolute",
      },
      preview: {
        top: 607,
        textAlign: "left",
        color: Color.gray_400,
        lineHeight: 21,
        fontFamily: FontFamily.bodyMediumBold,
        fontSize: FontSize.bodyMediumBold_size,
        left: 24,
        position: "absolute",
      },
      hoteldetailItem: {
        top: 590,
        borderTopWidth: 1,
        width: 80,
        height: 1,
        borderColor: "#ededed",
        borderStyle: "solid",
        left: 24,
        position: "absolute",
      },
      description: {
        textAlign: "left",
        color: Color.gray_400,
        lineHeight: 21,
        fontFamily: FontFamily.bodyMediumBold,
        fontSize: FontSize.bodyMediumBold_size,
      },
      astonHotelAlice: {
        color: Color.gray_100,
      },
      readMore: {
        color: Color.orange_100,
      },
      astonHotelAliceContainer: {
        marginTop: 12,
        width: 327,
      },
      titledescription: {
        top: 504,
      },
      vuesaxboldlocationIcon: {
        width: 18,
        height: 18,
      },
      aliceSpringsNt: {
        marginLeft: 8,
        color: Color.gray_100,
        lineHeight: 18,
        fontSize: FontSize.bodySmallMedium_size,
        textAlign: "left",
      },
      location: {
        top: 470,
        left: 24,
        position: "absolute",
      },
      theAstonVill: {
        textAlign: "left",
        color: Color.gray_400,
      },
      text: {
        color: Color.orange_100,
      },
      text3: {
        lineHeight: 20,
        fontFamily: FontFamily.interBold,
        fontWeight: "700",
      },
      night2: {
        color: Color.gray_100,
      },
      night1: {
        fontSize: FontSize.bodyMediumBold_size,
      },
      night: {
        width: 105,
        marginLeft: 73,
        textAlign: "left",
      },
      hotel: {
        top: 438,
        flexDirection: "row",
        width: 355,
      },
      freeWifi: {
        marginLeft: 8,
        lineHeight: 18,
        fontSize: FontSize.bodySmallMedium_size,
        textAlign: "left",
        color: Color.gray_400,
        flex: 1,
      },
      hotel1: {
        width: 102,
      },
      cofee: {
        width: 136,
        marginLeft: 8,
      },
      antDesignstarFilledIcon: {
        overflow: "hidden",
      },
      text4: {
        width: 24,
        marginLeft: 8,
        lineHeight: 18,
        fontSize: FontSize.bodySmallMedium_size,
        textAlign: "left",
        color: Color.gray_400,
      },
      review: {
        width: 81,
        marginLeft: 8,
      },
      tabs: {
        top: 386,
        alignItems: "center",
        flexDirection: "row",
      },
      imageIcon: {
        top: 124,
        borderRadius: Border.br_3xs,
        width: 359,
        height: 254,
        left: 24,
        position: "absolute",
        overflow: "hidden",
      },
      iconly: {
        height: 24,
        width: 24,
      },
      back: {
        backgroundColor: Color.white,
      },
      topNavigation: {
        top: 44,
        paddingHorizontal: 0,
        paddingVertical: Padding.p_xs,
        justifyContent: "space-between",
        width: 327,
        left: 24,
        position: "absolute",
      },
      container: {
        height: "100%",
        top: "0%",
        right: "0%",
        bottom: "0%",
        left: "0%",
        position: "absolute",
        width: "100%",
      },
      indicator: {
        height: "14.71%",
        width: "35.73%",
        top: "55.88%",
        right: "32%",
        bottom: "29.41%",
        left: "32.27%",
        borderRadius: Border.br_10xs_5,
        backgroundColor: Color.darkslategray_400,
        position: "absolute",
      },
      homeIndicator: {
        top: 814,
        left: 14,
        width: 375,
        height: 34,
        position: "absolute",
      },
      hoteldetail: {
        borderRadius: 24,
        backgroundColor: Color.seashell_100,
        height: 870,
        overflowY: "scroll",
        width: "100%",
        flex: 1,
      },
  });

export default HotelDetails;
