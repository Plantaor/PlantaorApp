import React from "react";
import{View, Text, StyleSheet,SafeAreaView, TouchableOpacity,Image} from "react-native"

const ProfileScreen =(({navigation})=>{
return(
    <SafeAreaView style={styles.container}>
        <Text style={styles.ProfileText}>profile </Text>
        <View style={styles.container2}>
        <View style={styles.setting}>
            <Text style={{fontSize:25,fontWeight:500, margin:-20,top:-20}}>Reglages</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('personalInf')} style={styles.perso}>
                <Text style={{fontSize:20,}}>Person information</Text>
                <Image source={require('../assets/icons/fleche.png')}/>   
            </TouchableOpacity>
            <View style={styles.LineViewlayout}/>
            <TouchableOpacity onPress={()=>navigation.navigate('LoginSecurity')} style={styles.perso}>
                <Text style={{fontSize:20,}}>Login and security</Text>
                <Image source={require('../assets/icons/fleche.png')}/>
            </TouchableOpacity>
            <View style={styles.LineViewlayout}/>
            <TouchableOpacity style={styles.perso}>
                <Text style={{fontSize:20,}}>Payment and payouts</Text>
                <Image source={require('../assets/icons/fleche.png')}/>             
            </TouchableOpacity>
            <View style={styles.LineViewlayout}/>
            <TouchableOpacity onPress={()=>navigation.navigate('personalInf')} style={styles.perso}>
                <Text style={{fontSize:20,}}>Historiques des commandes</Text>
                <Image source={require('../assets/icons/fleche.png')}/> 
            </TouchableOpacity>
            <View style={styles.LineViewlayout}/>
        </View>
        <View style={styles.Legal}>
            <Text style={{fontSize:25,fontWeight:500}}>Legal</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('personalInf')} >
                <Text style={{fontSize:20,}}>Terms of service</Text>
                <Image/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('personalInf')} >
                <Text style={{fontSize:20,}}>Private policy</Text>
                <Image/>
            </TouchableOpacity>
           
        </View>
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
    container2:{
        top:20,
        flex:2,
        justifyContent:'space-around'
    },
    setting:{
        /* backgroundColor:'green', */
        height:'50%',
        justifyContent:'space-around'
        
    },
    Legal:{
        backgroundColor:'blue',
        top:-60,
         justifyContent:'space-around'
    },
    ProfileText:{
        fontSize:30,
        color:"green",
        textAlign:'left',
    
    },
    perso:{
       fontSize:25,
       flexDirection:'row',
       justifyContent:'space-between',
       alignItems:'flex-start'
    },
    LineViewlayout:{
      height:1,
      width:'100%',
      borderStyle:"solid",
      top:-10, 
      backgroundColor:'black'
    
    },
})
export default ProfileScreen;