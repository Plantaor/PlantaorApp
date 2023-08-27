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

      <View>
        <TextInput placeholder="Prénom" onChangeText={(value) => setFirstname(value)}/>
        <TextInput placeholder="Nom de famille" onChangeText={(value) => setLastname(value)}/>
        <TextInput placeholder="Adresse email" onChangeText={(value)=>setEmail(value)}/>
        <TextInput placeholder="Mot de passe" secureTextEntry={true} onChangeText={(value)=>setPassword(value)}/>
        <TextInput placeholder="adress" />
      </View>
    </View>
    )
}
const styles = StyleSheet.create({
    containerHeader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:-400
      },
      buttonContainer: {
        flexDirection: 'row',
        // Arrange items horizontally
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