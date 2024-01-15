import { StyleSheet, Text, View,Image, TouchableOpacity, Input } from 'react-native'
import React from 'react'
import Tabnavigator from '../../navigation/tabs'

const PersonanInformation = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
        source={require('../assets/icons/fleche.png')}
        />
      </TouchableOpacity>
      <Text style={styles.ProfileText}>Informations personels</Text>

      <View style={style.edit}>
        <Input/>

      </View>
    </View>
    
  )
}

export default PersonanInformation

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding: 20,
    margin:10,
  },
  ProfileText:{
    fontSize:20,
    color:"green",
    textAlign:'left',
},
})