import React from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image } from "react-native";

const ProfileScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('personalInf')} style={styles.profileContainer}>
                <Image
                    source={require('../assets/images/femme-medecin.png')}
                    style={styles.profileImage}
                />
                <Text style={styles.profileName}>Agnes</Text>
                <Image
                    source={require('../assets/icons/fleche.png')}
                    style={styles.Imagefleche}
                />
            </TouchableOpacity>
            <View style={styles.separator} />
            <View style={styles.container2}>
                <View style={styles.setting}>
                    <Text style={[styles.sectionTitle, styles.boldText]}>Réglages</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('personalInf')} style={styles.optionContainer}>
                        <Image source={require('../assets/icons/profil.png')} style={styles.optionIcon} />
                        <Text style={styles.optionText}>Personal information</Text>
                        <Image source={require('../assets/icons/fleche.png')} style={styles.arrowIcon} />
                    </TouchableOpacity>
                    <View style={styles.separator} />
                    <TouchableOpacity onPress={() => navigation.navigate('LoginSecurity')} style={styles.optionContainer}>
                        <Image source={require('../assets/icons/paiement-securise.jpg')} style={styles.optionIcon} />
                        <Text style={styles.optionText}>Login and security</Text>
                        <Image source={require('../assets/icons/fleche.png')} style={styles.arrowIcon} />
                    </TouchableOpacity>
                    <View style={styles.separator} />
                    <TouchableOpacity onPress={() => navigation.navigate('payment')} style={styles.optionContainer}>
                        <Image source={require('../assets/icons/credit-card.png')} style={styles.optionIcon} />
                        <Text style={styles.optionText}>Modalité de paiement</Text>
                        <Image source={require('../assets/icons/fleche.png')} style={styles.arrowIcon} />
                    </TouchableOpacity>
                    <View style={styles.separator} />
                    <TouchableOpacity onPress={() => navigation.navigate('HistoriCommande')} style={styles.optionContainer}>
                        <Image source={require('../assets/icons/transaction-history.jpg')} style={styles.optionIcon} />
                        <Text style={styles.optionText}>Historiques commandes</Text>
                        <Image source={require('../assets/icons/fleche.png')} style={styles.arrowIcon} />
                    </TouchableOpacity>
                    <View style={styles.separator} />
                </View>
                <View style={styles.legal}>
                    <Text style={[styles.sectionTitle, styles.boldText]}>Legal</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('TermOflegal')} style={styles.optionContainer}>
                        <Image source={require('../assets/icons/terms_service.jpg')} style={styles.optionIcon} />
                        <Text style={styles.optionText}>Terms of service</Text>
                        <Image source={require('../assets/icons/fleche.png')} style={styles.arrowIcon} />
                    </TouchableOpacity>
                    <View style={styles.separator} />
                    <TouchableOpacity onPress={() => navigation.navigate('personalInf')} style={styles.optionContainer}>
                        <Text style={styles.optionTextPolicy}>Privacy policy</Text>
                        <Image source={require('../assets/icons/fleche.png')} style={styles.arrow} />
                    </TouchableOpacity>
                    <View style={styles.separator} />
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#FFFFFF',
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    profileImage: {
        width: 125,
        height: 125,
        borderRadius: 100,
        marginTop: 40,
    },
    profileName: {
        fontSize: 30,
        marginLeft: 15,
        flex: 1,
        marginTop: 60,
        color: '#000000',
    },
    Imagefleche: {
        marginTop: 70,
        width: 24,
        height: 24,
    },
    arrowIcon: {
        width: 19,
        height: 18,
    },
    container2: {
        flex: 2,
        justifyContent: 'space-around',
    },
    setting: {
        marginTop: 5,
    },
    legal: {
        marginTop: 1,
    },
    sectionTitle: {
        fontSize: 25,
        marginBottom: 1,
        color: '#000000',
        padding: 10,
    },
    boldText: {
        fontWeight: 'bold',
        fontSize: 25,
    },
    optionTextPolicy: {
        marginLeft: 55,
        fontSize: 18,
        flex: 1,
        color: '#000000',
    },
    arrow: {
        width: 19,
        height: 18,
        // marginLeft: 20,
    },
    optionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
    },
    optionIcon: {
        width: 30,
        height: 30,
        marginLeft: 20,
        marginRight: 20,
    },
    optionText: {
        fontSize: 18,
        flex: 1,
        color: '#000000',
    },
    separator: {
        height: 1,
        width: '100%',
        backgroundColor: '#E0E0E0',
        marginTop: 1,
    },
});

export default ProfileScreen;
