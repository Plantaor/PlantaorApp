import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <ImageBackground source={require('../assets/images/MainPage.png')} style={styles.container}>
      
        <Image
           source={require('../assets/logoplantaor.png')}
          style={styles.logo} 
        />
         <Text style={styles.headerText}>Complements alimentaires</Text>
         <Text style={styles.littleText}>100% naturels</Text>
      <View style={styles.content}>
        <TouchableOpacity style={styles.TouchableOpacity} onPress={()=>navigation.navigate('Inscription')}>
          <Text style={styles.buttonText}>Rejoignez-nous</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.connexion}>
        <Text>
          Deja menbre?
          </Text>
          <TouchableOpacity onPress={()=>navigation.navigate('login')}>
          <Text style>Se connecter</Text>
        </TouchableOpacity>
        
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color:'#266B39',
    fontSize: 30,
    marginBottom:10,
    fontWeight:'bold'
  },
  littleText:{
    color:'#266B39',
    fontSize:30,
  },
  logo: {
    width: 300,
    height: 200,
    resizeMode: 'contain',
    top:-50,
  },
  content: {
    width: '100%',
  },
  TouchableOpacity: {
    backgroundColor: '#266B39',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 80,
    alignItems: 'center',
    width:"50%",
    right:-100
   
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  connexion:{
    flexDirection:'row',
    padding:7
  }
});

export default HomeScreen;
