import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";
import DataContainer from "../components/DataContainer";
import StatusBarContainer from "../components/StatusBarContainer";
import TopContainer from "../components/TopContainer";

const TimeBooking = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.timeBooking}>
      <View style={styles.background} />
      <View style={styles.fluentMdl2calculatorAdditio}>
        <Text style={[styles.selectTime, styles.titleFlexBox]}>
          Select Time
        </Text>
        <View
          style={[
            styles.fluentMdl2calculatorAdditioChild,
            styles.fluentPosition,
          ]}
        />
        <View
          style={[
            styles.fluentMdl2calculatorAdditioItem,
            styles.fluentPosition,
          ]}
        />
        <Text style={[styles.text, styles.amTypo]}>23:59:59</Text>
        <Text style={[styles.am, styles.amPosition]}>AM</Text>
        <View style={[styles.icsharpArrowDropDown, styles.amPosition]} />
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
      </View>
      <View style={styles.daysOfWeek}>
        <Text style={[styles.mo, styles.moTypo]}>Mo</Text>
        <Text style={[styles.tu, styles.moTypo]}>Tu</Text>
        <Text style={[styles.we, styles.moTypo]}>We</Text>
        <Text style={[styles.th, styles.moTypo]}>Th</Text>
        <Text style={[styles.fr, styles.moTypo]}>Fr</Text>
        <Text style={[styles.sa, styles.saTypo]}>Sa</Text>
        <Text style={[styles.su, styles.saTypo]}>Su</Text>
      </View>
      <DataContainer />
      <StatusBarContainer mobileSignalLeft={0} />
      <View style={[styles.buttom, styles.buttomLayout]}>
        <View style={[styles.buttomChild, styles.buttomLayout]} />
        <Text
          style={[styles.title, styles.titleFlexBox]}
        >{` Sun 18 Jan, 23:59:59 AM `}</Text>
      </View>
      <Pressable
        style={[styles.button, styles.clearFlexBox]}
        onPress={() => navigation.navigate("CheckoutPayment")}
      >
        <Text style={[styles.confirm, styles.moTypo]}>Confirm</Text>
      </Pressable>
      <Text style={[styles.clear, styles.clearFlexBox]}>Clear</Text>
      <TopContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  titleFlexBox: {
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  fluentPosition: {
    height: 90,
    top: 549,
    backgroundColor: Color.white,
    position: "absolute",
  },
  amTypo: {
    fontSize: FontSize.size_16xl,
    top: 569,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  amPosition: {
    left: 253,
    position: "absolute",
  },
  moTypo: {
    textAlign: "center",
    fontSize: FontSize.bodyMediumBold_size,
  },
  saTypo: {
    color: Color.red,
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.bodyMediumBold_size,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  buttomLayout: {
    height: 144,
    width: 375,
    position: "absolute",
  },
  clearFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  background: {
    top: 213,
    right: -7,
    left: 7,
    backgroundColor: "rgba(255, 160, 42, 0.08)",
    height: 765,
    position: "absolute",
  },
  selectTime: {
    top: 508,
    left: 143,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.poppinsBold,
    color: Color.black,
    fontWeight: "700",
  },
  fluentMdl2calculatorAdditioChild: {
    left: 28,
    width: 192,
  },
  fluentMdl2calculatorAdditioItem: {
    left: 234,
    width: 142,
  },
  text: {
    left: 49,
    position: "absolute",
  },
  am: {
    fontSize: FontSize.size_16xl,
    top: 569,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  icsharpArrowDropDown: {
    top: 650,
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  vectorIcon: {
    height: "1.22%",
    width: "1.46%",
    top: "28.47%",
    right: "82.32%",
    bottom: "70.31%",
    left: "16.21%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  fluentMdl2calculatorAdditio: {
    width: 2048,
    height: 2048,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  mo: {
    marginLeft: -171,
    color: Color.darkslategray_200,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    left: "50%",
    top: 0,
    position: "absolute",
    width: 24,
  },
  tu: {
    marginLeft: -111.51,
    width: 20,
    color: Color.darkslategray_200,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    left: "50%",
    top: 0,
    position: "absolute",
  },
  we: {
    marginLeft: -59.84,
    color: Color.darkslategray_200,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    left: "50%",
    top: 0,
    position: "absolute",
    width: 24,
  },
  th: {
    marginLeft: -4.62,
    width: 21,
    color: Color.darkslategray_200,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    left: "50%",
    top: 0,
    position: "absolute",
  },
  fr: {
    marginLeft: 50.34,
    width: 16,
    color: Color.darkslategray_200,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    left: "50%",
    top: 0,
    position: "absolute",
  },
  sa: {
    marginLeft: 95.36,
    width: 20,
  },
  su: {
    marginLeft: 150.22,
    width: 21,
  },
  daysOfWeek: {
    marginLeft: -168,
    top: 120,
    width: 342,
    height: 17,
    left: "50%",
    position: "absolute",
  },
  buttomChild: {
    borderTopLeftRadius: Border.br_3xs,
    borderTopRightRadius: Border.br_3xs,
    backgroundColor: Color.white,
    height: 144,
    width: 375,
    left: 0,
    top: 0,
  },
  title: {
    marginTop: -49,
    top: "50%",
    left: 100,
    fontSize: FontSize.size_mid,
    lineHeight: 22,
    fontFamily: FontFamily.openSansRegular,
  },
  buttom: {
    top: 702,
    left: 11,
  },
  confirm: {
    lineHeight: 21,
    fontFamily: FontFamily.bodyMediumBold,
    color: Color.steelblue_100,
    textAlign: "center",
    fontWeight: "700",
  },
  button: {
    top: 764,
    left: 103,
    borderRadius: Border.br_xs,
    backgroundColor: Color.orange_100,
    width: 214,
    height: 59,
    flexDirection: "row",
    paddingTop: Padding.p_base,
    paddingRight: Padding.p_base,
    paddingBottom: Padding.p_base,
    justifyContent: "center",
  },
  clear: {
    top: 492,
    left: 319,
    fontFamily: FontFamily.robotoBold,
    color: Color.orange_100,
    textAlign: "right",
    display: "flex",
    width: 39,
    height: 18,
    fontSize: FontSize.bodyMediumBold_size,
    alignItems: "center",
    fontWeight: "700",
  },
  timeBooking: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.seashell_100,
    flex: 1,
    width: "100%",
    height: 870,
    overflow: "hidden",
  },
});

export default TimeBooking;
