import React, {useState} from "react";
import { StyleSheet, View,Text, TouchableOpacity, TextInput } from "react-native";

const Inscription = ({navigation}) => {

    const [firstname, setFirstname]= useState('');
    const [lastname, setLastname]=useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [adress, setAdress]=useState('');
    const [phone, setPhone]=useState('');

    return (
     <View style={styles.containerHeader}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text>Compte client</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>Compte Pro</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.textContainer}>
        <Text>Compte client</Text>
        <Text>Compte pro</Text>
      </View>

      <View >
        <TextInput style={styles.input} placeholder="Prénom" onChangeText={(value) => setFirstname(value)}/>
        <TextInput style={styles.input} placeholder="Nom de famille" onChangeText={(value) => setLastname(value)}/>
        <TextInput style={styles.input} placeholder="Adresse email" onChangeText={(value)=>setEmail(value)}/>
        <TextInput style={styles.input} placeholder="Mot de passe" secureTextEntry={true} onChangeText={(value)=>setPassword(value)}/>
        <TextInput style={styles.input} placeholder="adress" onChangeText={(value) => setAdress(value)}/>
        <TextInput style={styles.input} placeholder="Téléphone" keyboardType='numeric'  onChangeText={(value) => setPhone(value)}/>
      </View>
    </View>
    )
}
const styles = StyleSheet.create({
    containerHeader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:-10
      },
      buttonContainer: {
        flexDirection: 'row',
        // Arrange items horizontally
      },
      input:{
        width: 200,
    height: 40,
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
        
      },
      TextInput:{
        borderWidth:1,
        borderColor:'#777',
        padding:8,
        margin:10,
        width:500
,
      },
      button: {
        backgroundColor: 'gray',
        padding: 45,
        margin: 5,
        borderRadius: 5,
      },
      textContainer: {
        flexDirection:'row',
        marginTop: 10,
        marginBottom:10,
        margin:5,
        // alignItems: 'center',
      },
});
export default Inscription;