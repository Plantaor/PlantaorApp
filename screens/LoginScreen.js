import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Pressable } from 'react-native';

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
    /* console.log('Username:', username);
    console.log('Password:', password); */
 

  if (username ==='djiby' && password === 'thioub'){
    navigation.navigate("store");
     
  }else{
    alert('informations incorrectes')
  }
};

  return (
    
    <View style={styles.container} >
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
      
      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Se connecter</Text>
      </TouchableOpacity>
      <View style={styles.connexion}>
      <View style={styles.LineViewlayout}/>
      <Text style={styles.textConnexion}>Ou se connecter avec</Text>
      <View style={styles.LineViewlayout}/>
      </View>
    </View>
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
  connexion:{
    
    flexDirection:'row',
    alignItems:'space-between',
    top:80
  },
  input: {
    width: '80%',
    height: '6%',
    borderWidth: 1.5,
    marginBottom: 40,
    paddingHorizontal: 10,
    borderRadius:10,
  },
  LineViewlayout:{
    height:1,
    width:110,
    borderStyle:"solid",
    /* top:10, */
    backgroundColor:'black'

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

});

export default LoginScreen;
