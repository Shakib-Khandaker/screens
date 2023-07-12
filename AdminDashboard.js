import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const AdminDashboard = () => {
    const navigation = useNavigation();

  return (
    <View style={styles.paymentsStripedescription}>
      <View style={[styles.topNavigation, styles.buttonFlexBox]}>
        <View style={[styles.back, styles.backBorder]}>
          <Image
            style={styles.iconly}
            contentFit="cover"
            source={require("../assets/iconly.png")}
          />
        </View>
        <Text style={styles.topBar}>Admin Dashboard</Text>
        <View style={[styles.menu, styles.backBorder]}>
          <Image
            style={styles.iconly}
            contentFit="cover"
            source={require("../assets/vuesaxlinearmore.png")}
          />
        </View>
      </View>
      <View
        style={[
          styles.paymentsStripedescriptionChild,
          styles.paymentsShadowBox,
        ]}
      />
      <View
        style={[styles.paymentsStripedescriptionItem, styles.paymentsShadowBox]}
      />
      <View
        style={[
          styles.paymentsStripedescriptionInner,
          styles.paymentsShadowBox,
        ]}
      />
      <View style={[styles.rectangleView, styles.paymentsShadowBox]} />
      
      <View style={styles.homeIndicator}>
        <View style={styles.container} />
        <View style={styles.indicator} />
      </View>
    
      <Text style={[styles.orangeMoney, styles.text1Typo]} onPress={() => navigation.navigate("AddRoom")}>Add Rooms</Text>
      <Text style={[styles.text, styles.textTypo]}>Edit Rooms</Text>
      <Text style={[styles.text1, styles.text1Typo]}>View Feedbacks</Text>
      <Text style={[styles.paypal, styles.textTypo]}>Dashboard</Text>
     
     
    </View>
  );
};

const styles = StyleSheet.create({
  buttonFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  backBorder: {
    padding: Padding.p_5xs,
    borderWidth: 1,
    borderColor: "#ededed",
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    flexDirection: "row",
  },
  paymentsShadowBox: {
    height: 60,
    width: 332,
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 2,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_xl,
    backgroundColor: Color.white,
    position: "absolute",
  },
  text1Typo: {
    color: Color.black,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    lineHeight: 24,
    fontSize: FontSize.bodyLargeBold_size,
    position: "absolute",
  },
  textTypo: {
    left: 105,
    color: Color.black,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    lineHeight: 24,
    fontSize: FontSize.bodyLargeBold_size,
    position: "absolute",
  },
  connectedTypo: {
    color: Color.orange_100,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    lineHeight: 24,
    fontSize: FontSize.bodyLargeBold_size,
    position: "absolute",
  },
  visaIconLayout: {
    height: 23,
    width: 40,
    left: 54,
    position: "absolute",
  },
  iconly: {
    width: 24,
    height: 24,
  },
  back: {
    backgroundColor: Color.white,
    padding: Padding.p_5xs,
    borderWidth: 1,
    borderColor: "#ededed",
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
  },
  topBar: {
    fontFamily: FontFamily.poppinsBold,
    color: Color.gray_400,
    textAlign: "left",
    lineHeight: 24,
    fontSize: FontSize.bodyLargeBold_size,
    fontWeight: "700",
  },
  menu: {
    padding: Padding.p_5xs,
    borderWidth: 1,
    borderColor: "#ededed",
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
  },
  topNavigation: {
    top: 44,
    width: 327,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_xs,
    justifyContent: "space-between",
    left: 37,
  },
  paymentsStripedescriptionChild: {
    top: 159,
    left: 35,
    width: 332,
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 2,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_xl,
  },
  paymentsStripedescriptionItem: {
    top: 426,
    left: 37,
  },
  paymentsStripedescriptionInner: {
    top: 334,
    left: 35,
    width: 332,
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 2,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_xl,
  },
  rectangleView: {
    top: 242,
    left: 35,
    width: 332,
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 2,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_xl,
  },
  addNewCard: {
    fontSize: FontSize.bodyMediumBold_size,
    lineHeight: 21,
    fontFamily: FontFamily.bodyMediumBold,
    color: Color.steelblue_100,
    textAlign: "center",
    fontWeight: "700",
  },
  button: {
    top: 758,
    left: 21,
    borderRadius: Border.br_xs,
    backgroundColor: Color.orange_100,
    width: 357,
    height: 59,
    paddingTop: Padding.p_base,
    paddingRight: Padding.p_base,
    paddingBottom: Padding.p_base,
    justifyContent: "center",
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
    top: 817,
    left: 7,
    width: 375,
    height: 34,
    position: "absolute",
  },
  orangeMoneyLogoPng32Icon: {
    top: 180,
    height: 18,
    width: 40,
    left: 54,
    position: "absolute",
  },
  orangeMoney: {
    left: 103,
    top: 177,
  },
  text: {
    top: 260,
  },
  text1: {
    left: 104,
    top: 353,
  },
  paypal: {
    top: 445,
  },
  connected: {
    left: 247,
    color: Color.orange_100,
    top: 177,
  },
  connected1: {
    top: 265,
    left: 247,
    color: Color.orange_100,
  },
  connected2: {
    left: 247,
    color: Color.orange_100,
    top: 353,
  },
  connected3: {
    left: 248,
    top: 445,
  },
  visaLogo20061Icon: {
    top: 262,
  },
  visaLogo20062Icon: {
    top: 354,
  },
  paypalPng71Icon: {
    top: 438,
    left: 48,
    width: 50,
    height: 38,
    position: "absolute",
  },
  paymentsStripedescription: {
    borderRadius: Border.br_11xl,
    backgroundColor: "rgba(254, 248, 242, 0.93)",
    flex: 1,
    
    overflowX: "hidden",
    width: "100%",
  },
});

export default AdminDashboard;
