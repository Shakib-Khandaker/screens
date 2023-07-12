import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const HotelDetail = () => {
  const navigation = useNavigation();

  return (
     <SafeAreaView >
      <ScrollView>
    <View style={styles.hoteldetail}>
      <View style={[styles.image, styles.imageLayout]}>
        <Image
          style={[styles.image9Icon, styles.image9IconPosition]}
          contentFit="cover"
          source={require("../assets/image-9.png")}
        />
      </View>
      <View style={[styles.image1, styles.imageLayout]}>
        <Image
          style={[styles.image9Icon, styles.image9IconPosition]}
          contentFit="cover"
          source={require("../assets/image-91.png")}
        />
      </View>
      <View style={[styles.image2, styles.imageLayout]}>
        <Image
          style={[styles.image9Icon2, styles.image9IconPosition]}
          contentFit="cover"
          source={require("../assets/image-92.png")}
        />
      </View>
      <Image
        style={styles.hoteldetailChild}
        contentFit="cover"
        source={require("../assets/rectangle-1.png")}
      />
      <Pressable  style={[styles.topNavigation, styles.tabsFlexBox]}
      onPress={() =>
        navigation.navigate('CheckoutPayment')
      }>
      <View style={[styles.button, styles.tabsFlexBox]}  >
        <Text style={[styles.bookingNow, styles.previewTypo]}>Booking Now</Text>
      </View>
      </Pressable>
      <Text style={[styles.preview, styles.previewTypo]}>Preview</Text>
      <View style={styles.hoteldetailItem} />
      <View style={[styles.titledescription, styles.tabsPosition]}>
        <Text style={[styles.description, styles.previewTypo]}>
          Description
        </Text>
        <Text style={[styles.astonHotelAliceContainer, styles.aliceTypo1]}>
          <Text
            style={[styles.astonHotelAlice, styles.aliceTypo]}
          >{`Rose View Hotel. The best hotel in Sylhet `}</Text>
          <Text style={[styles.readMore, styles.previewTypo]}>
            Read More. . .
          </Text>
        </Text>
      </View>
      <View style={[styles.location, styles.tabsFlexBox]}>
        <Image
          style={styles.vuesaxboldlocationIcon}
          contentFit="cover"
          source={require("../assets/vuesaxboldlocation1.png")}
        />
        <Text style={[styles.aliceSpringsNt, styles.aliceTypo]}>
      Uposhohor, Sylhet      
  </Text>
      </View>
      <View style={[styles.hotel, styles.tabsPosition]}>
        <Text style={[styles.theAstonVill, styles.text1Typo]}>
       Rose View Hotel
        </Text>
        <Text style={styles.night}>
          <Text style={styles.text}>
            <Text style={styles.text1Typo}>$132</Text>
          </Text>
          <Text style={styles.night1}>
            <Text style={styles.text}>
              <Text style={styles.text3}>{` `}</Text>
            </Text>
            <Text style={[styles.night2, styles.text4Typo]}>/night</Text>
          </Text>
        </Text>
      </View>
      <View style={[styles.tabs, styles.tabsPosition]}>
        <View style={[styles.hotel1, styles.cofeeSpaceBlock]}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/vuesaxboldwifi.png")}
          />
          <Text style={[styles.freeWifi, styles.text4Typo]}>Free Wifi</Text>
        </View>
        <View style={[styles.cofee, styles.cofeeSpaceBlock]}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/vuesaxlinearcoffee.png")}
          />
          <Text style={[styles.freeWifi, styles.text4Typo]}>
            Free Breakfast
          </Text>
        </View>
        <View style={[styles.review, styles.cofeeSpaceBlock]}>
          <Image
            style={[styles.antDesignstarFilledIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/antdesignstarfilled.png")}
          />
          <Text style={[styles.text4, styles.text4Typo]}>5.0</Text>
        </View>
      </View>
      <Image
        style={styles.imageIcon}
        contentFit="cover"
        source={require("../assets/image.png")}
      />
      <Pressable
        style={[styles.topNavigation, styles.tabsFlexBox]}
        onPress={() => navigation.navigate("Home")}
      >
        <View style={[styles.back, styles.backBorder]}>
          <Image
            style={styles.iconly}
            contentFit="cover"
            source={require("../assets/iconly.png")}
          />
        </View>
        <Text style={[styles.theAstonVill, styles.text1Typo]}>Detail</Text>
        <View style={styles.backBorder}>
          <Image
            style={styles.iconly}
            contentFit="cover"
            source={require("../assets/vuesaxlinearmore.png")}
          />
        </View>
      </Pressable>
      
    </View>
    </ScrollView>
    </SafeAreaView>
      

  );
};

const styles = StyleSheet.create({
  imageLayout: {
    borderRadius: Border.br_5xs,
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
    height: 82,
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

export default HotelDetail;
