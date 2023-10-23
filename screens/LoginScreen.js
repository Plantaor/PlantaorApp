import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Pressable } from 'react-native';

const LoginScreen = ({navigation}) => {
   /*  const [firstname, setfirstname]= useState('');
    const [lastname, setlastname]= useStae(''); */
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [lastname, setLastname] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
    // For demonstration purposes, we'll just log the username and password
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <View style={styles.container}>
    <View>
      <Pressable style={styles.rectangle} onPress={()=>{}} />
    </View>
    <View >
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
       
      
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <TouchableOpacity onPress={()=>navigation.navigate('store')} style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#000",
  },
  textContainer:{
    
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius:20,
  },
  button: {
    backgroundColor: '#266B39',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  rectangle:{
   
  }
});

export default LoginScreen;
