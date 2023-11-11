import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Pressable,Button, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const LoginScreen = ({navigation}) => {
   /*  const [firstname, setfirstname]= useState('');
    const [lastname, setlastname]= useStae(''); */
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
/*     const [lastname, setLastname] = useState('');
 */
  const handleLogin = () => {
    // Implement your login logic here
    // For demonstration purposes, we'll just log the username and password
  if (username ==='djiby' && password === 'thioub'){
    navigation.navigate("store");
     
  }else{
    alert('informations incorrectes')
  }
};

  return (
    
    <SafeAreaView style={styles.container} >
      <View style={styles.customer}>
        <TouchableOpacity style={styles.user}>
          <Text style={styles.usert}>user</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.userPro}>
        <Text style={styles.usertpro}>userPro</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        placeholder="Mot de passe"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <TouchableOpacity>
        <Text style={styles.Mpdoublie}>Mot de passe oublié ?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Se connecter</Text>
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
            <TouchableOpacity  onPress={()=>navigation.navigate('Inscription')}>
              <Text style={styles.nouveauCompte}>je n'ai pas encore de compte ?</Text>
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
    top:70
  },
  input: {
    width: '80%',
    height: '6%',
    borderWidth: 1.5,
    marginBottom: 30,
    paddingHorizontal: 10,
    borderRadius:10,
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
  Mpdoublie:{
    fontSize:16,
    color:'green',
    left:80,
    top:-30
  },
  Mpdouble:{
    fontSize:16,
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
    top:110
  },

  button: {
    backgroundColor: '#266B39',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width:'60%'
    
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
    top:110,
    right:85
  }

});

export default LoginScreen;
