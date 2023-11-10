import  React,  { useState } from "react";
import { StyleSheet, View, Text,Image, TouchableOpacity, SafeAreaView,TextInput } from "react-native";

const Inscription = () => {
  const [username, setUsername]=useState('');
  return (
    <SafeAreaView style={styles.inscription}>
      <Image
        style={[styles.remixIconsfilldevicerssFi, styles.iconMicrosoftLayout]}
        contentFit="cover"
        source={require("../assets/inscription.png")}
      />
      <View  />
      <View style={[styles.inscriptionInner, styles.groupLayout]}>
        <View style={[styles.groupChild, styles.groupBorder]} />
      </View>
      <View >
        <TextInput style={styles.rectangleParent} placeholder="enter votre nom" value={username}/>
        <View style={[styles.groupItem, styles.groupBorder]} />
        <View style={[styles.rectangleWrapper, styles.groupLayout]}>
          <View style={[styles.groupChild, styles.groupBorder]} />
        </View> 
      </View>
      <View style={[styles.groupView, styles.groupLayout]}>
        <View style={[styles.groupChild, styles.groupBorder]} />
      </View>
      <View style={[styles.inscriptionInner1, styles.groupChild1Layout]}>
        <View style={[styles.groupChild1, styles.groupChild1Layout]} />
      </View>
      <Text style={[styles.jeNaiPas, styles.jeNaiPasTypo]}>
        Je n’ai pas de compte
      </Text>
      <Text style={[styles.ouSeConnecter, styles.jeNaiPasTypo]}>
        Ou se connecter avec
      </Text>
      <Text style={[styles.motDePasse, styles.jeNaiPasTypo]}>
        Mot de passe oublie ?
      </Text>
      <View style={[styles.inscriptionItem, styles.lineViewLayout]} />
      <View style={[styles.lineView, styles.lineViewLayout]} />
      <View  />
      <Image
        style={styles.rectangleIcon}
        contentFit="cover"
        source={require("../assets/inscription.png")}
      />
      <View
        style={[styles.inscriptionChild2, styles.inscriptionChildLayout1]}
        
      />
      <View
        style={[styles.inscriptionChild3, styles.inscriptionChildLayout1]}
      />
     {/*  <Image
        style={[styles.iconMicrosoft, styles.iconMicrosoftLayout]}
        contentFit="cover"
        source={require("../assets/icon--microsoft.png")}
      /> */}
      <View style={[styles.inscriptionChild4, styles.inscriptionChildLayout]} />
      <View style={[styles.inscriptionChild5, styles.inscriptionChildLayout]} />
      {/* <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      /> */}
      <Text style={[styles.google, styles.googleTypo]}>Google</Text>
      <Text style={[styles.facebook, styles.googleTypo]}>Facebook</Text>
      <Text style={[styles.apple, styles.appleTypo]}>Apple</Text>
      <Text style={[styles.microsoft, styles.appleTypo]}>Microsoft</Text>
      {/* <Image
        style={[styles.iconGoogle, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/icon--google.png")}
      /> */}
      <View style={[styles.appleIdLogin, styles.groupBorder]}>
       {/*  <Image
          style={styles.iconApple}
          contentFit="cover"
          source={require("../assets/icon--apple.png")}
        /> */}
      </View>
      <View style={styles.button}>
      <TouchableOpacity style={[styles.rejoignezNous, styles.jeNaiPasTypo]}>
        <Text>
        rejoignez-nous
        </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  iconMicrosoftLayout: {
    width: 21,
    position: "absolute",
    overflow: "hidden",
  },
  groupLayout: {
    height: 59,
    width: 294,
  },
  groupBorder: {
    borderWidth: 1,
    /* borderColor: Color.colorBlack, */
    borderStyle: "solid",
    position: "absolute",
   /*  backgroundColor: Color.colorWhite, */
  },
  button:{
    backgroundColor: '#266B39',
  /*   paddingVertical: 10,
    paddingHorizontal: 20, */
    borderRadius: 5,
  },
  groupChild1Layout: {
    height: 47,
    width: 294,
    position: "absolute",
  },
  jeNaiPasTypo: {
    textAlign: "left",
/*     fontFamily: FontFamily.interBold,
 */    fontWeight: "700",
    position: "absolute",
  },
  lineViewLayout: {
    height: 1,
    width: 110,
    borderTopWidth: 1,
  /*   borderColor: Color.colorSilver, */
    top: 660,
    borderStyle: "solid",
    position: "absolute",
  },
  inscriptionChildLayout1: {
    height: 35,
    width: 126,
/*     borderRadius: Border.br_8xs,
 */    left: 30,
    borderWidth: 1,
   /*  borderColor: Color.colorBlack, */
    borderStyle: "solid",
    position: "absolute",
    /* backgroundColor: Color.colorWhite, */
  },
  inscriptionChildLayout: {
    left: 226,
    height: 35,
    width: 126,
/*     borderRadius: Border.br_8xs,
 */    borderWidth: 1,
   /*  borderColor: Color.colorBlack, */
    borderStyle: "solid",
    position: "absolute",
  /*   backgroundColor: Color.colorWhite, */
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  googleTypo: {
    top: 691,
    textAlign: "left",
   /*  color: Color.colorBlack, */
/*     fontFamily: FontFamily.interBold,
 */    fontWeight: "700",
/*     fontSize: FontSize.size_xs,
 */    position: "absolute",
  },
  appleTypo: {
    top: 753,
    textAlign: "left",
  /*   color: Color.colorBlack, */
/*     fontFamily: FontFamily.interBold,
 */    fontWeight: "700",
/*     fontSize: FontSize.size_xs,
 */    position: "absolute",
  },
  remixIconsfilldevicerssFi: {
    left: 307,
    height: 18,
    top: 7,
    width: 21,
  },
  inscriptionChild: {
    borderRadius: 28,
    backgroundColor: "#1e1e1e",
    width: 111,
    height: 23,
    left: 139,
    top: 7,
    position: "absolute",
  },
  groupChild: {
/*     borderRadius: Border.br_sm,
 */    left: 0,
    top: 0,
    height: 59,
    width: 294,
  },
  inscriptionInner: {
    top: 373,
    left: 46,
    position: "absolute",
  },
  groupItem: {
    top: 85,
/*     borderRadius: Border.br_sm,
 */    left: 0,
    height: 59,
    width: 294,
  },
  rectangleWrapper: {
    left: 3,
    top: 0,
    position: "absolute",
  },
  rectangleParent: {
    top: 208,
    left: 49,
    width: 297,
    height: 144,
    position: "absolute",
  },
  groupView: {
    top: 455,
    left: 48,
    position: "absolute",
  },
  groupChild1: {
   /*  backgroundColor: Color.colorMediumseagreen, */
/*     borderRadius: Border.br_sm,
 */    left: 0,
    top: 0,
  },
  inscriptionInner1: {
    top: 574,
    left: 48,
  },
  jeNaiPas: {
    top: 805,
    left: 68,
   /*  color: Color.colorBlack, */
    textAlign: "left",
/*     fontFamily: FontFamily.interBold,
 */    fontWeight: "700",
/*     fontSize: FontSize.size_xs,
 */  },
  ouSeConnecter: {
    top: 652,
    left: 132,
  /*   color: Color.colorBlack, */
    textAlign: "left",
/*     fontFamily: FontFamily.interBold,
 */    fontWeight: "700",
/*     fontSize: FontSize.size_xs,
 */  },
  motDePasse: {
    top: 528,
    left: 214,
   /*  color: Color.colorMediumseagreen, */
    textAlign: "left",
/*     fontFamily: FontFamily.interBold,
 */    fontWeight: "700",
/*     fontSize: FontSize.size_xs,
 */  },
  inscriptionItem: {
    left: 7,
  },
  lineView: {
    left: 273,
  },
  inscriptionChild1: {
    top: 831,
    borderTopWidth: 3,
    width: 112,
    height: 3,
   /*  borderColor: Color.colorBlack, */
    borderStyle: "solid",
    left: 139,
    position: "absolute",
  },
  rectangleIcon: {
    top: 35,
    width: 420,
    height: 134,
    left: 2,
    position: "absolute",
  },
  inscriptionChild2: {
    top: 681,
  },
  inscriptionChild3: {
    top: 743,
  },
  iconMicrosoft: {
    top: 750,
    left: 43,
    height: 21,
  },
  inscriptionChild4: {
    top: 743,
  },
  inscriptionChild5: {
    top: 681,
  },
  vectorIcon: {
    height: "2.84%",
    width: "6.15%",
    top: "81.4%",
    right: "32.31%",
    bottom: "15.77%",
    left: "61.54%",
  },
  google: {
    left: 79,
  },
  facebook: {
    left: 268,
  },
  apple: {
    left: 280,
  },
  microsoft: {
    left: 72,
  },
  iconGoogle: {
    height: "2.13%",
    width: "4.62%",
    top: "81.75%",
    right: "82.82%",
    bottom: "16.11%",
    left: "12.56%",
  },
  iconApple: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  appleIdLogin: {
    top: 746,
    left: 240,
/*     borderRadius: Border.br_5xs,
 */    width: 28,
    height: 28,
    flexDirection: "row",
/*     padding: Padding.p_3xs,
 */    alignItems: "center",
    justifyContent: "center",
  },
  rejoignezNous: {
    backgroundColor:'gray',
    top: 584,
    left: 114,
    fontSize: 22,
    color:"white",
   /*  color: Color.colorWhite, */
    textAlign: "left",
/*     fontFamily: FontFamily.interBold,
 */    fontWeight: "700",
  },
  inscription: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
   /*  backgroundColor: Color.colorWhite, */
  },
});

export default Inscription;
