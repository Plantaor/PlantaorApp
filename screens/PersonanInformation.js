import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';

const PersonanInformation = ({ navigation }) => {
  const [name, setName] = useState('Djiby Thioub');
  const [password, setPassword] = useState('**********');
  const [phoneNumber, setPhoneNumber] = useState('Provide phone number');
  const [email, setEmail] = useState('t**6@gmail.com');
  const [address, setAddress] = useState('Not provided');

  const infoItems = [
    { title: 'Nom et prénom', value: name, onChange: setName, secureTextEntry: false },
    { title: 'Mot de passe', value: password, onChange: setPassword, secureTextEntry: true },
    { title: 'Phone number', value: phoneNumber, onChange: setPhoneNumber, secureTextEntry: false },
    { title: 'Email', value: email, onChange: setEmail, secureTextEntry: false },
    { title: 'Address', value: address, onChange: setAddress, secureTextEntry: false }
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Image
            source={require('../assets/icons/flecheretour.jpg')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Information personnel</Text>

      </View>

      <View style={styles.infoContainer}>
        {infoItems.map((item, index) => (
          <View key={index} style={styles.infoItem}>
            <View style={styles.textContainer}>
              <Text style={styles.infoTitle}>{item.title}</Text>
              <TextInput
                style={styles.infoInput}
                value={item.value}
                onChangeText={item.onChange}
                secureTextEntry={item.secureTextEntry}
              />
            </View>
            <TouchableOpacity onPress={() => { /* Add edit functionality */ }}>
              <Image
                source={require('../assets/icons/Group.jpg')}
                style={styles.editIcon}
              />
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    width: 45,
    height: 35,
    borderRadius: 20,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 24,
    color: "green",
    textAlign: 'center',
    flex: 1,
    marginTop: 100,
  },

  infoContainer: {
    flex: 1,
    marginTop: 20,
  },
  infoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingBottom: 10,
  },
  textContainer: {
    flex: 1,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoInput: {
    fontSize: 14,
    color: '#888',
    paddingVertical: 5,
    marginTop: 5,
  },
  editIcon: {
    width: 29,
    height: 29,
  },
});

export default PersonanInformation;
