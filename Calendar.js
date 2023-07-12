import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const Calendar = () => {
  const navigation = useNavigation();
  const [adult,setAdult]=React.useState(1);
  const [child,setChild]=React.useState(1);
  return (
    <View style={styles.calendar}>
      <View style={styles.background} />
      <View style={[styles.calendarChild, styles.calendarLayout]} />
      <View style={[styles.calendarItem, styles.calendarLayout]} />
      <View style={styles.fluentMdl2calculatorAdditio} />
    
      <View style={[styles.data, styles.dataLayout]}>
        <View style={[styles.dataChild, styles.dataLayout]} />
        <View style={styles.dataItem} />
        <View style={styles.calendar1}>
          <View style={[styles.calendarrow01, styles.calendarrowLayout]}>
            <Text style={[styles.text, styles.textLayout]}>1</Text>
            <Text style={[styles.text1, styles.textLayout]}>2</Text>
            <Text style={[styles.text2, styles.textLayout]}>3</Text>
            <Text style={[styles.text3, styles.textLayout]}>4</Text>
          </View>
          <View style={[styles.calendarrow02, styles.calendarrowLayout]}>
            <Text style={[styles.text, styles.textLayout]}>5</Text>
            <Text style={[styles.text5, styles.textLayout]}>6</Text>
            <Text style={[styles.text6, styles.textLayout]}>7</Text>
            <Text style={[styles.text3, styles.textLayout]}>8</Text>
            <Text style={[styles.text8, styles.textLayout]}>9</Text>
            <Text style={[styles.text9, styles.textLayout]}>10</Text>
            <Text style={[styles.text10, styles.textLayout]}>11</Text>
          </View>
          <View style={styles.calendarrow03}>
            <Text style={[styles.text, styles.textLayout]}>12</Text>
            <Text style={[styles.text5, styles.textLayout]}>13</Text>
            <Text style={[styles.text13, styles.textTypo2]}>15</Text>
            <Text style={[styles.text14, styles.textTypo2]}>16</Text>
            <Text style={[styles.text15, styles.textTypo2]}>17</Text>
            <View style={[styles.calendarrow03Child, styles.calendarrow03Bg]} />
            <View style={[styles.calendarrow03Item, styles.calendarrow03Bg]} />
            <Text style={[styles.text16, styles.textTypo1]}>18</Text>
            <Text style={[styles.text17, styles.textTypo1]}>14</Text>
          </View>
          <View style={[styles.calendarrow04, styles.calendarrowLayout]}>
            <Text style={[styles.text18, styles.textTypo]}>19</Text>
            <Text style={[styles.text19, styles.textTypo]}>20</Text>
            <Text style={[styles.text20, styles.textTypo]}>21</Text>
            <Text style={[styles.text21, styles.textTypo]}>22</Text>
            <Text style={[styles.text22, styles.textTypo]}>23</Text>
            <Text style={[styles.text23, styles.textTypo]}>24</Text>
            <Text style={[styles.text24, styles.textTypo]}>25</Text>
          </View>
          <View style={[styles.calendarrow05, styles.calendarrowLayout]}>
            <Text style={[styles.text18, styles.textTypo]}>26</Text>
            <Text style={[styles.text19, styles.textTypo]}>27</Text>
            <Text style={[styles.text20, styles.textTypo]}>28</Text>
            <Text style={[styles.text21, styles.textTypo]}>29</Text>
            <Text style={[styles.text29, styles.textLayout]}>30</Text>
            <Text style={[styles.text9, styles.textLayout]}>31</Text>
          </View>
        </View>
        <Text style={[styles.june, styles.juneTypo]}>June</Text>
        <Text style={[styles.wholeMonth, styles.clearTypo]}>Whole month</Text>
      </View>
      
      <View style={[styles.buttom, styles.buttomLayout]}>
        <View style={[styles.buttomChild, styles.buttomLayout]} />
        <Text
          style={[styles.title, styles.titleTypo]}
        >{`Wed 14 June - Sun 18 Jan `}</Text>
        <Text style={[styles.text32, styles.juneTypo]}>$468</Text>
      </View>
      <Pressable
        style={[styles.button, styles.calendarrow03Bg]}
        onPress={() => navigation.navigate("CheckoutPayment")}
      >
        <Text style={styles.confirm}>Confirm</Text>
      </Pressable>
      <Text style={styles.guests}>Guests</Text>
      <Text style={[styles.clear, styles.clearTypo]}>Clear</Text>
      <View style={[styles.adultParent, styles.parentLayout]}>
        <Text style={[styles.adult, styles.adultTypo]}>Adult</Text>
        <View style={[styles.vectorParent, styles.bgIconPosition]}>
        <Text  onPress={e=>   setChild(child=>child+1)}>+</Text>
          <Text style={[styles.text33, styles.adultTypo]}>{child}</Text>
          <Text  onPress={e=>{console.log("Hello")
          setChild(child=>child-1)
          }}>-</Text>
        </View>
      </View>
      <View style={[styles.childrenParent, styles.parentLayout]}>
        <Text style={[styles.adult, styles.adultTypo]}>Children</Text>
        <View style={[styles.vectorParent, styles.bgIconPosition]}>
        <Text  onPress={e=>setAdult(adult=>adult+1)}>+</Text>
          <Text style={[styles.text33, styles.adultTypo]}>{adult}</Text>
          <Text  onPress={e=>{console.log("Hello")
          setAdult(adult=>adult-1)
          }}>-</Text>
        </View>
      </View>
      <Pressable
        style={[styles.top, styles.topPosition]}
        onPress={() => navigation.navigate("HotelDetail")}
      >
        <View style={[styles.arrowParent, styles.topPosition]}>
          <Image
            style={[styles.arrowIcon, styles.labelPosition]}
            resizeMode="cover"
            source={require("../assets/back.png")}
          />
        
        </View>
        <View style={styles.segmentedControlleft}>
          <Image
            style={[styles.bgIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/wifi.png")}
          />
          <Image
            style={[styles.bgIcon1, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/wifi.png")}
          />
          <Text style={[styles.year, styles.yearPosition]}>Year</Text>
          <Text style={[styles.month, styles.yearPosition]}>Month</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  calendarLayout: {
    height: 64,
    width: 343,
    backgroundColor: Color.white,
    position: "absolute",
  },
  iconLayout1: {
    width: 24,
    position: "absolute",
  },
  moTypo: {
    textAlign: "center",
    fontSize: FontSize.bodyMediumMedium_size,
  },
  saTypo: {
    color: Color.red,
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.bodyMediumMedium_size,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  dataLayout: {
    height: 320,
    width: 349,
    position: "absolute",
  },
  calendarrowLayout: {
    height: 36,
    position: "absolute",
  },
  textLayout: {
    width: 35,
    height: 36,
    top: 0,
  },
  textTypo2: {
    color: Color.royalblue_100,
    width: 35,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    height: 36,
    textAlign: "center",
    fontSize: FontSize.bodyMediumMedium_size,
    top: 0,
    position: "absolute",
  },
  calendarrow03Bg: {
    backgroundColor: Color.orange_100,
    position: "absolute",
  },
  textTypo1: {
    color: Color.white,
    width: 35,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    height: 36,
    textAlign: "center",
    fontSize: FontSize.bodyMediumMedium_size,
    top: 0,
    position: "absolute",
  },
  textTypo: {
    color: Color.darkslategray_300,
    width: 35,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    height: 36,
    textAlign: "center",
    fontSize: FontSize.bodyMediumMedium_size,
    top: 0,
    position: "absolute",
  },
  juneTypo: {
    height: 29,
    lineHeight: 28,
    textAlign: "left",
    fontFamily: FontFamily.title2,
    fontWeight: "600",
    letterSpacing: 0,
    color: Color.black,
    position: "absolute",
  },
  clearTypo: {
    height: 18,
    textAlign: "right",
    fontFamily: FontFamily.robotoBold,
    color: Color.orange_100,
    fontWeight: "700",
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.bodyMediumMedium_size,
    position: "absolute",
  },
  text31Layout: {
    width: 54,
    position: "absolute",
  },
  buttomLayout: {
    height: 144,
    width: 375,
    position: "absolute",
  },
  titleTypo: {
    lineHeight: 22,
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.openSansRegular,
    textAlign: "left",
    color: Color.black,
  },
  parentLayout: {
    height: 31,
    width: 309,
    position: "absolute",
  },
  adultTypo: {
    fontSize: FontSize.size_lg,
    textAlign: "left",
    letterSpacing: 0,
    top: 0,
    position: "absolute",
  },
  bgIconPosition: {
    bottom: "0%",
    right: "0%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  topPosition: {
    top: "50%",
    position: "absolute",
  },
  labelPosition: {
    marginTop: -11,
    top: "50%",
    position: "absolute",
  },
  yearPosition: {
    fontSize: FontSize.bodySmallRegular_size,
    marginTop: -7.5,
    top: "50%",
    textAlign: "center",
    left: "50%",
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
  calendarChild: {
    top: 522,
    left: 36,
  },
  calendarItem: {
    top: 598,
    borderRadius: 3,
    left: 33,
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
    textAlign: "center",
    fontSize: FontSize.bodyMediumMedium_size,
    color: Color.darkslategray_200,
    fontFamily: FontFamily.interRegular,
    left: "50%",
    top: 0,
  },
  tu: {
    marginLeft: -111.51,
    width: 20,
    color: Color.darkslategray_200,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    fontSize: FontSize.bodyMediumMedium_size,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  we: {
    marginLeft: -59.84,
    textAlign: "center",
    fontSize: FontSize.bodyMediumMedium_size,
    color: Color.darkslategray_200,
    fontFamily: FontFamily.interRegular,
    left: "50%",
    top: 0,
  },
  th: {
    marginLeft: -4.62,
    width: 21,
    color: Color.darkslategray_200,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    fontSize: FontSize.bodyMediumMedium_size,
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
    fontSize: FontSize.bodyMediumMedium_size,
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
  dataChild: {
    borderRadius: Border.br_8xs,
    left: 0,
    top: 0,
    backgroundColor: Color.white,
  },
  dataItem: {
    top: 172,
    left: 110,
    backgroundColor: "#3865e0",
    width: 236,
    height: 41,
    opacity: 0.2,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  text: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    width: 35,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "center",
    fontSize: FontSize.bodyMediumMedium_size,
    position: "absolute",
    color: Color.black,
    left: 0,
  },
  text1: {
    left: 46,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    width: 35,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "center",
    fontSize: FontSize.bodyMediumMedium_size,
    position: "absolute",
    color: Color.black,
  },
  text2: {
    left: 97,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    width: 35,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "center",
    fontSize: FontSize.bodyMediumMedium_size,
    position: "absolute",
    color: Color.black,
  },
  text3: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    width: 35,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "center",
    fontSize: FontSize.bodyMediumMedium_size,
    position: "absolute",
    color: Color.black,
    left: 151,
  },
  calendarrow01: {
    width: 186,
    left: 151,
    top: 0,
  },
  text5: {
    left: 51,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    width: 35,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "center",
    fontSize: FontSize.bodyMediumMedium_size,
    position: "absolute",
    color: Color.black,
  },
  text6: {
    left: 98,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    width: 35,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "center",
    fontSize: FontSize.bodyMediumMedium_size,
    position: "absolute",
    color: Color.black,
  },
  text8: {
    left: 197,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    width: 35,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "center",
    fontSize: FontSize.bodyMediumMedium_size,
    position: "absolute",
    color: Color.black,
  },
  text9: {
    left: 248,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    width: 35,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "center",
    fontSize: FontSize.bodyMediumMedium_size,
    position: "absolute",
    color: Color.black,
  },
  text10: {
    left: 302,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    width: 35,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "center",
    fontSize: FontSize.bodyMediumMedium_size,
    position: "absolute",
    color: Color.black,
  },
  calendarrow02: {
    top: 49,
    width: 337,
    left: 0,
  },
  text13: {
    left: 151,
  },
  text14: {
    left: 197,
  },
  text15: {
    left: 248,
  },
  calendarrow03Child: {
    left: 301,
    width: 35,
    height: 36,
    top: 0,
    borderRadius: Border.br_8xs,
  },
  calendarrow03Item: {
    left: 98,
    width: 35,
    height: 36,
    top: 0,
    borderRadius: Border.br_8xs,
  },
  text16: {
    left: 302,
  },
  text17: {
    left: 98,
  },
  calendarrow03: {
    top: 97,
    height: 37,
    width: 337,
    left: 0,
    position: "absolute",
  },
  text18: {
    left: 0,
  },
  text19: {
    left: 51,
  },
  text20: {
    left: 98,
  },
  text21: {
    left: 151,
  },
  text22: {
    left: 197,
  },
  text23: {
    left: 248,
  },
  text24: {
    left: 302,
  },
  calendarrow04: {
    width: 337,
    top: 146,
    left: 0,
  },
  text29: {
    color: Color.gray_300,
    left: 197,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    width: 35,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "center",
    fontSize: FontSize.bodyMediumMedium_size,
    position: "absolute",
  },
  calendarrow05: {
    top: 194,
    width: 283,
    left: 0,
  },
  calendar1: {
    top: 77,
    left: 12,
    height: 230,
    width: 337,
    position: "absolute",
  },
  june: {
    top: 14,
    left: 15,
    fontSize: FontSize.title2_size,
    width: 57,
  },
  wholeMonth: {
    top: 20,
    left: 247,
    width: 84,
  },
  data: {
    left: 27,
    top: 146,
  },
  text31: {
    top: 2,
    fontWeight: "900",
    fontFamily: FontFamily.poppinsBlack,
    color: Color.darkslategray_100,
    letterSpacing: 0,
    textAlign: "center",
    fontSize: FontSize.bodyMediumMedium_size,
    width: 54,
    height: 17,
    left: 0,
  },
  statusBarTime01Default: {
    top: 12,
    left: 21,
    height: 21,
    overflow: "hidden",
  },
  batteryIcon: {
    top: 17,
    right: 16,
    height: 11,
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  mobileSignalIcon: {
    width: 17,
    height: 11,
  },
  statusBar02Transparent: {
    width: 402,
    height: 44,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  buttomChild: {
    borderTopLeftRadius: Border.br_3xs,
    borderTopRightRadius: Border.br_3xs,
    left: 0,
    top: 0,
    backgroundColor: Color.white,
  },
  title: {
    marginTop: -45,
    left: 90,
    fontFamily: FontFamily.openSansRegular,
    top: "50%",
    position: "absolute",
  },
  text32: {
    top: 76,
    left: 48,
    fontSize: 25,
    width: 74,
  },
  buttom: {
    top: 702,
    left: 11,
  },
  confirm: {
    lineHeight: 21,
    fontFamily: FontFamily.bodySmallBold,
    color: Color.steelblue_100,
    fontWeight: "700",
    textAlign: "center",
    fontSize: FontSize.bodyMediumMedium_size,
  },
  button: {
    top: 764,
    left: 155,
    borderRadius: Border.br_xs,
    width: 214,
    height: 59,
    flexDirection: "row",
    paddingTop: Padding.p_base,
    paddingRight: Padding.p_base,
    paddingBottom: Padding.p_base,
    justifyContent: "center",
    alignItems: "center",
  },
  guests: {
    top: 488,
    fontSize: FontSize.size_xl,
    left: 45,
    textAlign: "left",
    fontFamily: FontFamily.title2,
    fontWeight: "600",
    letterSpacing: 0,
    color: Color.black,
    position: "absolute",
  },
  clear: {
    top: 492,
    left: 319,
    width: 39,
  },
  adult: {
    fontFamily: FontFamily.title2,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
    color: Color.black,
    left: 0,
  },
  vectorIcon: {
    height: "60%",
    width: "23.81%",
    top: "20%",
    bottom: "20%",
    left: "76.19%",
    right: "0%",
    maxWidth: "100%",
  },
  text33: {
    left: 28,
    fontSize:20,
    color: Color.gray_100,
    fontFamily: FontFamily.openSansRegular,
  },
  icroundMinusIcon: {
    top: 1,
    height: 24,
    left: 0,
    overflow: "hidden",
  },
  vectorParent: {
    height: "80.65%",
    width: "20.39%",
    top: "19.35%",
    left: "79.61%",
    position: "absolute",
  },
  adultParent: {
    top: 541,
    left: 45,
  },
  childrenParent: {
    top: 614,
    left: 47,
  },
  arrowIcon: {
    width: 15,
    height: 21,
    left: 0,
  },
  label: {
    left: 22,
    width: 44,
    fontFamily: FontFamily.openSansRegular,
    lineHeight: 22,
    fontSize: FontSize.size_mid,
    textAlign: "left",
    color: Color.black,
    letterSpacing: 0,
  },
  arrowParent: {
    marginTop: 6,
    width: 66,
    height: 22,
    left: 0,
  },
  bgIcon: {
    height: "100%",
    top: "0%",
    left: "0%",
    borderRadius: 2,
    opacity: 0.1,
    bottom: "0%",
    right: "0%",
    width: "100%",
  },
  bgIcon1: {
    height: "93.33%",
    top: "3.03%",
    right: 86,
    bottom: "3.64%",
    left: 1,
    borderRadius: Border.br_8xs,
  },
  year: {
    marginLeft: 30.5,
    color: "#bdbdbd",
    fontSize: FontSize.bodySmallRegular_size,
    marginTop: -7.5,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  month: {
    marginLeft: -61.5,
    fontFamily: FontFamily.interSemibold,
    color: Color.orange_100,
    fontSize: FontSize.bodySmallRegular_size,
    marginTop: -7.5,
    fontWeight: "600",
  },
  segmentedControlleft: {
    right: 0,
    left: 137,
    height: 33,
    top: 0,
    position: "absolute",
  },
  top: {
    marginTop: -399,
    width: 340,
    height: 56,
    left: 33,
  },
  calendar: {
    borderRadius: Border.br_11xl,
    backgroundColor: '#FEF8F2',
    flex: 1,
 
    overflowY: "scroll",
    width: "100%",
  },
});

export default Calendar;
