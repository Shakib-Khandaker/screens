import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const PurchaseCardContainer = () => {
  return (
    <View style={styles.purchase}>
      <Text style={styles.cvvcvc}>CVV/CVC</Text>
      <View style={styles.purchaseChild} />
      <View style={styles.textInput}>
        <Text style={[styles.cardNumber, styles.cardTypo]}>Card number</Text>
        <View style={[styles.textInputChild, styles.textPosition1]} />
        <Text style={[styles.xxxxXxxx9321, styles.textTypo]}>
          4255 XXXX XXXX 9321
        </Text>
        <Image
          style={styles.cashcheckoutcreditmastercarIcon}
          contentFit="cover"
          source={require("../assets/cashcheckoutcreditmastercardicon1320162631073161905-0.png")}
        />
      </View>
      <View style={styles.dateInput}>
        <Text style={[styles.expirationDate, styles.cardTypo]}>
          Expiration date
        </Text>
        <View style={[styles.dateInputChild, styles.dateLayout]} />
        <View style={[styles.dateInputItem, styles.dateLayout]} />
        <Text style={[styles.text, styles.textTypo]}>09</Text>
        <Text style={[styles.text1, styles.textTypo]}>20</Text>
        <Image
          style={[styles.groupIcon, styles.groupIconLayout]}
          contentFit="cover"
          source={require("../assets/group.png")}
        />
        <Image
          style={[styles.groupIcon1, styles.groupIconLayout]}
          contentFit="cover"
          source={require("../assets/group1.png")}
        />
      </View>
      <Text style={[styles.text2, styles.textTypo]}>922</Text>
      <View style={[styles.textInput1, styles.textPosition1]}>
        <Text style={[styles.cardHolderName, styles.cardTypo]}>
          Card holder name
        </Text>
        <View style={[styles.textInputItem, styles.textPosition1]} />
        <Text style={[styles.garoldPain, styles.textTypo]}>Aqosuwa</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardTypo: {
    textAlign: "left",
    height: "26.47%",
    left: "0%",
    top: "0%",
    color: Color.gray_200,
    fontFamily: FontFamily.openSansRegular,
    letterSpacing: 0,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  textPosition1: {
    bottom: "0%",
    left: "0%",
    width: "100%",
    right: "0%",
    position: "absolute",
  },
  textTypo: {
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    letterSpacing: 0,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  dateLayout: {
    width: "49.01%",
    bottom: "0%",
    top: "41.18%",
    height: "58.82%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  groupIconLayout: {
    bottom: "23.53%",
    top: "64.71%",
    width: "10.68%",
    height: "11.76%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  cvvcvc: {
    width: "24.76%",
    left: "75.24%",
    textAlign: "right",
    color: Color.gray_200,
    fontFamily: FontFamily.openSansRegular,
    letterSpacing: 0,
    fontSize: FontSize.size_lg,
    top: "35.47%",
    height: "7.69%",
    position: "absolute",
  },
  purchaseChild: {
    height: "17.09%",
    width: "21.86%",
    top: "47.44%",
    left: "78.14%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderStyle: "solid",
    right: "0%",
    borderRadius: Border.br_8xs,
    bottom: "35.47%",
    position: "absolute",
  },
  cardNumber: {
    width: "45.02%",
  },
  textInputChild: {
    top: "41.18%",
    height: "58.82%",
    bottom: "0%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
  },
  xxxxXxxx9321: {
    width: "60.13%",
    left: "2.92%",
    top: "54.41%",
    color: Color.black,
    height: "26.47%",
  },
  cashcheckoutcreditmastercarIcon: {
    height: "67.47%",
    width: "14.58%",
    top: "36.44%",
    right: "2.92%",
    bottom: "-3.91%",
    left: "82.51%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  textInput: {
    bottom: "70.94%",
    left: "0%",
    top: "0%",
    width: "100%",
    height: "29.06%",
    right: "0%",
    position: "absolute",
  },
  expirationDate: {
    width: "92.72%",
  },
  dateInputChild: {
    right: "50.99%",
    left: "0%",
  },
  dateInputItem: {
    right: "-7.95%",
    left: "58.94%",
  },
  text: {
    width: "15.89%",
    left: "6.62%",
    top: "54.41%",
    color: Color.black,
    height: "26.47%",
  },
  text1: {
    width: "15.23%",
    left: "65.56%",
    top: "54.41%",
    color: Color.black,
    height: "26.47%",
  },
  groupIcon: {
    right: "57.76%",
    left: "31.56%",
  },
  groupIcon1: {
    right: "-0.92%",
    left: "90.23%",
  },
  dateInput: {
    width: "48.55%",
    right: "51.45%",
    left: "0%",
    height: "29.06%",
    bottom: "35.47%",
    top: "35.47%",
    position: "absolute",
  },
  text2: {
    width: "10.61%",
    top: "51.28%",
    left: "83.92%",
    height: "7.69%",
    color: Color.black,
  },
  cardHolderName: {
    width: "69.45%",
  },
  textInputItem: {
    borderRadius: Border.br_3xs,
    top: "41.18%",
    height: "58.82%",
    bottom: "0%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderStyle: "solid",
  },
  garoldPain: {
    height: "26.99%",
    width: "92.13%",
    top: "54.12%",
    left: "3.21%",
  },
  textInput1: {
    top: "70.94%",
    height: "29.06%",
  },
  purchase: {
    top: 364,
    left: 26,
    width: 343,
    height: 255,
    position: "absolute",
  },
});

export default PurchaseCardContainer;
