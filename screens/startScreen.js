import React from "react";
import { StyleSheet, View, Image,Text,Pressable } from "react-native";

const StartScreen =({navigation})=>{
    return(
        <View style={styles.startScreen}>
        <View style={styles.startScreenchild} />
        <Image style={[styles.neuroCalmIcon, styles.iconPosition1]} resizeMode="cover" source={require('../assets/images/neuro-calm.png')} />
        <Image style={[styles.transitIcon, styles.iconPosition1]} resizeMode="cover" source={require("../assets/images/Transit.png")} />
        <Image style={[styles.sexboostIcon, styles.iconPosition1]} resizeMode="cover" source={require("../assets/images/sexboost.png")} />
        <Image style={[styles.relaxIcon, styles.iconPosition1]} resizeMode="cover" source={require("../assets/images/relax.png")} />
        <Image style={[styles.digestIcon, styles.iconPosition]} resizeMode="cover" source={require("../assets/images/digest.png" )}/>
        <Image style={[styles.beautyIcon, styles.iconPosition1]} resizeMode="cover" source={require("../assets/images/beauty.png")} />
        <Image style={[styles.immuniTIcon, styles.iconPosition]} resizeMode="cover" source={require("../assets/images/immuni-t.png" )}/>
        <Pressable style={[styles.loginbutton, styles.loginbuttonLayout]} onPress={()=>navigation.navigate('Inscription')}>
        <View style={[styles.loginbuttonChild, styles.loginbuttonLayout]} />
        <Text style={styles.rejoignezNous}>Rejoignez-nous</Text>
        </Pressable>
        <View style={styles.soustitre} />
        <Text style={[styles.naturels, styles.naturelsTypo]}>100% naturels</Text>
        <Text style={[styles.complementsAlimentaires, styles.naturelsTypo]}>Complements alimentaires</Text>
        <Text style={[styles.dejaMembre, styles.dejaMembreTypo]}>Deja membre?</Text>
        <Pressable style={[styles.seConnecter, styles.dejaMembrePosition]} onPress={()=>navigation.navigate('login')}>
        <Text style={[styles.seConnecter1, styles.dejaMembreTypo]}>Se connecter</Text>
        </Pressable>
        <Image style={styles.logoPlantaorIcon} resizeMode="cover" source="../assets/images/logo_plantaor.png" />
        </View>
        );
        };
        const styles = StyleSheet.create({
            startScreenchild: {
                top: 833,
                left: 134,
                borderStyle: "solid",
                borderColor: "#fff",
                borderTopWidth: 3,
                width: 112,
                height: 3,
                display: "none",
                position: "absolute"
                },
            /* iconPosition1: {
                opacity: 0.25,
                position: "absolute"
                },
                iconPosition: {
                top: 0,
                left: 0
                },
                loginbuttonLayout: {
                height: 69,
                width: 229,
                position: "absolute"
                },
                naturelsTypo: {
                color: "#266b39",
                textAlign: "left",
                
                position: "absolute"
                },
                dejaMembreTypo: {
                fontSize: 19,
                color: "#266b39",
                textAlign: "left",
                
                },
                dejaMembrePosition: {
                top: 571,
                position: "absolute"
                },
                startScreenchild: {
                top: 833,
                left: 134,
                borderStyle: "solid",
                borderColor: "#fff",
                borderTopWidth: 3,
                width: 112,
                height: 3,
                display: "none",
                position: "absolute"
                },
                neuroCalmIcon: {
                top: 157,
                borderRadius: 19,
                width: 174,
                height: 340,
                left: 0,
                opacity: 0.25
                },
                transitIcon: {
                top: 311,
                left: 290,
                width: 178,
                height: 272
                },
                sexboostIcon: {
                top: 663,
                left: 31,
                width: 226,
                height: 181
                },
                relaxIcon: {
                top: 567,
                left: 160,
                width: 230,
                height: 277
                },
                digestIcon: {
                width: 244,
                height: 276,
                opacity: 0.25,
                position: "absolute"
                },
                beautyIcon: {
                top: 447,
                width: 175,
                height: 344,
                left: 0,
                opacity: 0.25
                },
                immuniTIcon: {
                width: 390,
                height: 409,
                opacity: 0.25,
                position: "absolute"
                },
                loginbuttonChild: {
                borderRadius: 15,
                backgroundColor: "#266b39",
                top: 0,
                left: 0
                },
                rejoignezNous: {
                top: 19,
                color: "#fff",
                textAlign: "left",
                
                fontWeight: "700",
                fontSize: 26,
                left: 20,
                position: "absolute"
                },
                loginbutton: {
                top: 473,
                left: 71
                },
                soustitre: {
                top: 369,
                left: 25,
                width: 339,
                height: 35,
                position: "absolute"
                },
                naturels: {
                top: 392,
                left: 113,
                fontSize: 25
                },
                complementsAlimentaires: {
                top: 353,
                fontWeight: "700",
                fontSize: 26,
                left: 20,
                color: "#266b39"
                },
                dejaMembre: {
                left: 47,
                top: 571,
                position: "absolute"
                },
                seConnecter1: {
                
                },
                seConnecter: {
                left: 196
                },
                logoPlantaorIcon: {
                top: 119,
                left: 35,
                width: 321,
                height: 208,
                position: "absolute"
                },
                startScreen: {
                backgroundColor: "#fff",
                flex: 1,
                width: "100%",
                height: 844,
                overflow: "hidden"
                } */
          });
export default StartScreen;