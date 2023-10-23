import React from "react";
import{View, Text, StyleSheet,SafeAreaView} from "react-native"

const ProfileScreen =()=>{
return(
    <SafeAreaView style={styles.container}>
        <Text>this is the profile </Text>
    </SafeAreaView>
)
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        padding: 20,
            margin:10,
    }
})
export default ProfileScreen;