import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";
import PurchaseCardContainer from "../components/PurchaseCardContainer";
import PurchaseContainer from "../components/PurchaseContainer";
const CheckoutPayment = () => {
  return (
    <View style={styles.checkoutPayment}>
      <Text style={styles.headline}>Payment</Text>
      <PurchaseCardContainer />
      <PurchaseContainer
        paymentMethodText={require("../assets/backgrounds--white.png")}
        paymentMethodImageUrl={require("../assets/controls-small--arrow--fw.png")}
        paymentMethodTextLabel="Pay with a credit card"
        paymentMethodName="Credit card"
      />
      <PurchaseContainer
       paymentMethodText={require("../assets/backgrounds--white.png")}
       paymentMethodImageUrl={require("../assets/controls-small--arrow--fw.png")}
        paymentMethodTextLabel="Pay with orange money"
        paymentMethodName="Orange Money"
        propTop={236}
        propWidth="42.4%"
        propRight="41.6%"
      /> 
      <View style={[styles.button, styles.buttonFlexBox]}>
        <Text style={[styles.confirmPayment, styles.topBarTypo]}>
          Confirm Payment
        </Text>
      </View>
      <View style={[styles.topNavigation, styles.buttonFlexBox]}>
        <View style={[styles.back, styles.backBorder]}>
          <Image
            style={styles.iconlyLayout}
            contentFit="cover"
            source={require("../assets/icon.png")}
          />
        </View>
        <Text style={[styles.topBar, styles.topBarTypo]}>Payment</Text>
        <View style={[styles.menu, styles.backBorder]}>
          <Image
            style={[styles.vuesaxlinearmoreIcon, styles.iconlyLayout]}
            contentFit="cover"
            source={require("../assets/vuesaxlinearmore.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  topBarTypo: {
    fontFamily: FontFamily.bodyMediumBold,
    fontWeight: "700",
  },
  backBorder: {
    padding: Padding.p_5xs,
    borderWidth: 1,
    borderColor: "#ededed",
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    flexDirection: "row",
  },
  iconlyLayout: {
    height: 24,
    width: 24,
  },
  headline: {
    top: 132,
    fontSize: FontSize.title2_size,
    letterSpacing: 0,
    lineHeight: 28,
    fontWeight: "600",
    fontFamily: FontFamily.title2,
    color: Color.black,
    width: 343,
    textAlign: "left",
    left: 16,
    position: "absolute",
  },
  confirmPayment: {
    fontSize: FontSize.bodyMediumBold_size,
    lineHeight: 21,
    color: Color.steelblue_100,
    textAlign: "center",
  },
  button: {
    top: 772,
    left: 31,
    borderRadius: Border.br_xs,
    backgroundColor: Color.orange_100,
    width: 357,
    height: 59,
    paddingTop: Padding.p_base,
    paddingRight: Padding.p_base,
    paddingBottom: Padding.p_base,
    justifyContent: "center",
  },
  back: {
    backgroundColor: Color.white,
  },
  topBar: {
    fontSize: FontSize.bodyLargeBold_size,
    lineHeight: 24,
    color: Color.gray_400,
    marginLeft: 65,
    textAlign: "left",
  },
  vuesaxlinearmoreIcon: {
    display: "none",
  },
  menu: {
    display: "none",
    marginLeft: 65,
  },
  topNavigation: {
    top: 54,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_xs,
    left: 16,
  },
  checkoutPayment: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.seashell_100,
    flex: 1,
    width: "100%",
    
    overflowX: "hidden",
    overflowY:"scroll"
  },
});

export default CheckoutPayment;
{/* <PurchaseContainer
        paymentMethodText={require("../assets/backgrounds--white.png")}
        paymentMethodImageUrl={require("../assets/controls-small--arrow--fw.png")}
        paymentMethodTextLabel="Pay with a credit card"
        paymentMethodName="Credit card"
      />
      <PurchaseContainer
       paymentMethodText={require("../assets/backgrounds--white.png")}
       paymentMethodImageUrl={require("../assets/controls-small--arrow--fw.png")}
        paymentMethodTextLabel="Pay with orange money"
        paymentMethodName="Orange Money"
        propTop={236}
        propWidth="42.4%"
        propRight="41.6%"
      /> */}