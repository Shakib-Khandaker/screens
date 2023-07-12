import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const DataContainer = () => {
  return (
    <View style={[styles.data, styles.dataLayout]}>
      <View style={[styles.dataChild, styles.dataLayout]} />
      <View style={styles.calendar}>
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
          <Text style={[styles.text3, styles.textLayout]}>15</Text>
          <Text style={[styles.text8, styles.textLayout]}>16</Text>
          <Text style={[styles.text9, styles.textLayout]}>17</Text>
          <View style={[styles.calendarrow03Child, styles.textLayout]} />
          <Text style={[styles.text16, styles.textLayout]}>18</Text>
          <Text style={[styles.text6, styles.textLayout]}>14</Text>
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
      <Text style={styles.june}>June</Text>
      <Text style={styles.wholeMonth}>Whole month</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
    position: "absolute",
  },
  textTypo: {
    color: Color.darkslategray_300,
    width: 35,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.bodyMediumBold_size,
    height: 36,
    top: 0,
    position: "absolute",
  },
  dataChild: {
    backgroundColor: Color.white,
    borderRadius: Border.br_8xs,
    left: 0,
    top: 0,
  },
  text: {
    justifyContent: "center",
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    width: 35,
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.bodyMediumBold_size,
    color: Color.black,
    left: 0,
  },
  text1: {
    left: 46,
    justifyContent: "center",
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    width: 35,
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.bodyMediumBold_size,
    color: Color.black,
  },
  text2: {
    left: 97,
    justifyContent: "center",
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    width: 35,
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.bodyMediumBold_size,
    color: Color.black,
  },
  text3: {
    justifyContent: "center",
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    width: 35,
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.bodyMediumBold_size,
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
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    width: 35,
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.bodyMediumBold_size,
    color: Color.black,
  },
  text6: {
    left: 98,
    justifyContent: "center",
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    width: 35,
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.bodyMediumBold_size,
    color: Color.black,
  },
  text8: {
    left: 197,
    justifyContent: "center",
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    width: 35,
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.bodyMediumBold_size,
    color: Color.black,
  },
  text9: {
    left: 248,
    justifyContent: "center",
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    width: 35,
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.bodyMediumBold_size,
    color: Color.black,
  },
  text10: {
    left: 302,
    justifyContent: "center",
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    width: 35,
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.bodyMediumBold_size,
    color: Color.black,
  },
  calendarrow02: {
    top: 49,
    width: 337,
    left: 0,
  },
  calendarrow03Child: {
    left: 301,
    backgroundColor: Color.orange_100,
    borderRadius: Border.br_8xs,
  },
  text16: {
    color: Color.white,
    left: 302,
    justifyContent: "center",
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    width: 35,
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.bodyMediumBold_size,
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
    left: 0,
    top: 146,
  },
  text29: {
    color: Color.gray_400,
    left: 197,
    justifyContent: "center",
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    width: 35,
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.bodyMediumBold_size,
  },
  calendarrow05: {
    top: 194,
    width: 283,
    left: 0,
  },
  calendar: {
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
    letterSpacing: 0,
    lineHeight: 28,
    fontWeight: "600",
    fontFamily: FontFamily.title2,
    textAlign: "left",
    width: 57,
    height: 29,
    color: Color.black,
    position: "absolute",
  },
  wholeMonth: {
    top: 20,
    left: 247,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    color: Color.orange_100,
    textAlign: "right",
    width: 84,
    height: 18,
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.bodyMediumBold_size,
    position: "absolute",
  },
  data: {
    left: 27,
    top: 146,
  },
});

export default DataContainer;
