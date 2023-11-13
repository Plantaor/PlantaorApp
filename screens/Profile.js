import React from "react";
import{View, Text, StyleSheet,SafeAreaView, TouchableOpacity,Image} from "react-native"

const ProfileScreen =(({navigation})=>{
return(
    <SafeAreaView style={styles.container}>
        <Text style={styles.ProfileText}>profile </Text>
        <View style={styles.setting}>
            <Text style={{fontSize:25,top:20}}>Settings</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('personalInf')} >
                <Text style={{fontSize:20,top:20,marginRight:30}}>Person information</Text>
                <Image/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('LoginSecurity')} >
                <Text style={{fontSize:20,top:20,marginRight:30}}>Login and security</Text>
                <Image/>
            </TouchableOpacity>
            <TouchableOpacity >
                <Text style={{fontSize:20,top:20,marginRight:30}}>Payment and payouts</Text>
                <Image/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('personalInf')} >
                <Text style={{fontSize:20,top:20,marginRight:30}}>Historiques des commandes</Text>
                <Image/>
            </TouchableOpacity>
        </View>
        <View style={styles.Legal}>
            <Text style={{fontSize:25,top:20}}>Legal</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('personalInf')} >
                <Text style={{fontSize:20,top:20,marginRight:30}}>Terms of service</Text>
                <Image/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('personalInf')} >
                <Text style={{fontSize:20,top:20,marginRight:30}}>Private policy</Text>
                <Image/>
            </TouchableOpacity>
           
        </View>
    </SafeAreaView>
)
})

const styles=StyleSheet.create({
    container:{
        flex:1,
        padding: 20,
            margin:10,
    },
    setting:{
        backgroundColor:'green'
        
    },
    Legal:{
        backgroundColor:'blue'
    },
    ProfileText:{
        fontSize:30,
        color:"green",
        textAlign:'left',
    
    }
})
export default ProfileScreen;