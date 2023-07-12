import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const Profile = () => {
  return (
    <View style={styles.profile}>

      <View style={[styles.top, styles.topLayout]}>
        <View style={[styles.arrowParent, styles.arrowPosition]}>
          <Image
            style={[styles.arrowIcon, styles.arrowPosition]}
            contentFit="cover"
            source={require("../assets/arrow.png")}
          />
          <Text style={styles.label}>Profile</Text>
        </View>
      </View>
      <Image
        style={styles.profileChild}
        contentFit="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <View style={[styles.profileItem, styles.profileChildLayout]} />
      <View style={[styles.profileInner, styles.profileChildLayout]} />
      <View style={[styles.rectangleView, styles.profileChildLayout]} />
      <View style={[styles.profileChild1, styles.profileChildLayout]} />
      <View style={[styles.profileChild2, styles.profileChildLayout]} />
      <View style={[styles.profileChild3, styles.profileChildLayout]} />
      <View style={[styles.profileChild4, styles.profileChildLayout]} />
      <View style={[styles.profileChild5, styles.profileChildLayout]} />
      <View style={[styles.profileChild6, styles.profileChildLayout]} />
      <Text style={[styles.fullname, styles.dobTypo]}>Fullname</Text>
      <Text style={[styles.username, styles.dobTypo]}>Username</Text>
      <Text style={[styles.dob, styles.dobTypo]}>DOB</Text>
      <Text style={[styles.gender, styles.dobTypo]}>Gender</Text>
      <Text style={[styles.emailAddress, styles.dobTypo]}>Email Address</Text>
      <Text style={[styles.phoneNumber, styles.dobTypo]}>Phone Number</Text>
      <Text style={[styles.location, styles.dobTypo]}>Location</Text>
      <Text style={[styles.idecowasCardPassport, styles.dobTypo]}>
        ID[ECOWAS CARD/ Passport/ drivers license]
      </Text>
      <Text style={[styles.uploadId, styles.dobTypo]}>Upload ID</Text>
      <View style={styles.button}>
        <Text style={styles.update}>Update</Text>
      </View>
      <Image
        style={styles.materialSymbolseditSquareIcon}
        contentFit="cover"
        source={require("../assets/materialsymbolseditsquare.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  topLayout: {
    height: 22,
    width: 70,
  },
  arrowPosition: {
    left: 0,
    marginTop: -11,
    top: "50%",
    position: "absolute",
  },
  profileChildLayout: {
    height: 64,
    width: 324,
    backgroundColor: Color.whitesmoke,
    borderRadius: Border.br_xl,
    left: 40,
    position: "absolute",
  },
  dobTypo: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.bodySmallMedium_size,
    left: 91,
    textAlign: "left",
    color: Color.black,
    lineHeight: 22,
    letterSpacing: 0,
    position: "absolute",
  },
  arrowIcon: {
    width: 12,
    height: 21,
  },
  label: {
    left: 18,
    fontSize: FontSize.size_mid,
    fontWeight: "600",
    fontFamily: FontFamily.title2,
    textAlign: "left",
    color: Color.black,
    lineHeight: 22,
    letterSpacing: 0,
    marginTop: -11,
    top: "50%",
    position: "absolute",
  },
  arrowParent: {
    height: 22,
    width: 70,
  },
  top: {
    marginTop: -474,
    left: 21,
    top: "50%",
    height: 22,
    width: 70,
    position: "absolute",
  },
  profileChild: {
    top: 76,
    left: 131,
    width: 140,
    height: 140,
    position: "absolute",
  },
  profileItem: {
    top: 799,
  },
  profileInner: {
    top: 878,
  },
  rectangleView: {
    top: 720,
  },
  profileChild1: {
    top: 641,
  },
  profileChild2: {
    top: 562,
  },
  profileChild3: {
    top: 473,
  },
  profileChild4: {
    top: 394,
  },
  profileChild5: {
    top: 315,
  },
  profileChild6: {
    top: 236,
  },
  fullname: {
    top: 257,
  },
  username: {
    top: 341,
  },
  dob: {
    top: 409,
  },
  gender: {
    top: 494,
  },
  emailAddress: {
    top: 583,
  },
  phoneNumber: {
    top: 667,
  },
  location: {
    top: 741,
  },
  idecowasCardPassport: {
    top: 820,
  },
  uploadId: {
    top: 899,
  },
  update: {
    fontSize: FontSize.bodyMediumBold_size,
    lineHeight: 21,
    fontWeight: "700",
    fontFamily: FontFamily.bodyMediumBold,
    color: Color.steelblue_100,
    textAlign: "center",
  },
  button: {
    top: 970,
    left: 22,
    borderRadius: Border.br_xs,
    backgroundColor: Color.orange_100,
    width: 357,
    height: 59,
    flexDirection: "row",
    paddingTop: Padding.p_base,
    paddingRight: Padding.p_base,
    paddingBottom: Padding.p_base,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  materialSymbolseditSquareIcon: {
    top: 178,
    left: 230,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  profile: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.linen,
    flex: 1,
    width: "100%",
    height: 1062,
    overflowY: "scroll",
  },
});

export default Profile;
