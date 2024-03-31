import  React,  { useState } from "react";
import { StyleSheet, View, Text,Image, TouchableOpacity, SafeAreaView,TextInput } from "react-native";

const Inscription = ({navigation}) =>{
  const [Firstname, setFirstname]=useState('');
  const [Lastname, setLastname]=useState('');
  const [Email, setEmail]=useState('');
  const [Password, setPassword]=useState('');
  return (
    <SafeAreaView style={styles.container} >
    <View style={styles.banner}>
      <Image
      source={require('../assets/inscription.png')}
      />
    </View>
    <TextInput
      placeholder="Prenom"
      value={Firstname}
      onChangeText={setFirstname}
      style={styles.input}
    />
     <TextInput
      placeholder="Nom"
      value={Lastname}
      onChangeText={setLastname}
      style={styles.input}
    />
     <TextInput
      placeholder="Email"
      value={Email}
      onChangeText={setEmail}
      style={styles.input}
    />
    <TextInput
      placeholder="Mot de passe"
      value={Password}
      onChangeText={setPassword}
      secureTextEntry
      style={styles.input}
    />
    <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('store')}>
      <Text style={styles.buttonText}>Rejoignez-nous</Text>
    </TouchableOpacity>
    <View style={styles.connexion}>
      <View style={styles.LineViewlayout}/>
        <Text style={styles.textConnexion}>Ou se connecter avec</Text>
      <View style={styles.LineViewlayout}/>
    </View>
          <View style={styles.Oconnexion}>
            <View style ={styles.row}>
                <TouchableOpacity style={styles.button1}>
                <Image
                  source={require('../assets/icons/Google.png')}
                  />
                  <Text style={styles.apple}>Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button1}>
                <Image
                  source={require('../assets/icons/Facebook.png')}
                  />
                  <Text style={styles.apple}>Facebook</Text>
                </TouchableOpacity>
            </View>
              <View style={styles.row}>
                  <TouchableOpacity style={styles.button1}>
                    <Image
                    source={require('../assets/icons/Twitter.png')}
                    />
                    <Text style={styles.apple}>Twitter</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button1}>
                  <Image
                    source={require('../assets/icons/Apple.png')}
                    />
                    <Text style={styles.apple} >Apple</Text>
                  </TouchableOpacity> 
                </View>  
          </View>
          <TouchableOpacity  onPress={()=>navigation.navigate('login')}>
            <Text style={styles.nouveauCompte}>j'ai deja un compte ?</Text>
          </TouchableOpacity>
</SafeAreaView>
);
};

const styles = StyleSheet.create({
container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 8,
  backgroundColor: "#fff",
  borderStyle: "solid",
  borderColor: "#000",
/*     backgroundColor:'blue'
*/  },
banner:{
  top:-20
},
  textContainer:{
    fontWeight:'bold',
    fontSize: 18,  
}, 
row:{
  flexDirection: 'row',
 justifyContent: 'space-between',
 marginBottom: 20, 
},
button1:{
  flexDirection:'row',
  width: '40%',
/*    backgroundColor: '#DDDDDD',
*/   borderRadius:1,
 padding: 15,
 alignItems: 'center',
 borderWidth: 1,
 /* justifyContent:'space-between', */
 marginRight:10,
 borderRadius: 8,
 borderStyle:'solid'
},
connexion:{
  
  flexDirection:'row',
  alignItems:'space-between',
  justifyContent:'space-between',
  top:20
},
input: {
  width: '80%',
  height: '6%',
  borderWidth: 1.5,
  marginBottom: 30,
  paddingHorizontal: 10,
  borderRadius:10,
  top:10
},
customer:{
  flexDirection:'row',
/*     justifyContent:'space-between',  
*/  },
user:{
  width:'40%',
  height:170,
/*     backgroundColor:'black',
*/    top:-100,
  marginRight:20,
  borderWidth: 1,
},
userPro:{
  width:'40%',
  height:170,
/*     backgroundColor:'black',
*/    top:-100,
  marginRight:1,
  borderWidth: 1,
},
usert:{
  fontSize:19,
  textAlignVertical:'top',
  top:170,
  position:'absolute',
  left:55
},
usertpro:{
  fontSize:18,
  textAlignVertical:'top',
  top:170,
  position:'absolute',
  left:40
},
LineViewlayout:{
  height:1,
  width:110,
  borderStyle:"solid",
  top:-10, 
  backgroundColor:'black'

},
Oconnexion:{
  flexDirection:'column',
  alignItems:'flex-start',
  top:50,
  left:10
},

button: {
  backgroundColor: '#266B39',
  paddingVertical: 10,
  paddingHorizontal: 20,
  borderRadius: 5,
  width:'60%',
  top:10
  
},
buttonText: {
  textAlign:'center',
  color: 'white',
  fontSize: 18,
  fontWeight: 'bold',
},
textConnexion:{
  fontSize:18
},
apple:{
  right:-20
},
nouveauCompte:{
  fontSize:15,
  color:'green',
  top:40,
  right:85
}
});

export default Inscription;
