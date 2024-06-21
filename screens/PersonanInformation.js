import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';

const PersonalInformation = ({ navigation }) => {
  const [firstName, setFirstName] = useState('Djiby');
  const [lastName, setLastName] = useState('Thioub');
  const [password, setPassword] = useState('**********');
  const [phoneNumber, setPhoneNumber] = useState('Provide phone number');
  const [currentEmail, setCurrentEmail] = useState('t**6@gmail.com');
  const [newEmail, setNewEmail] = useState('');
  const [address, setAddress] = useState('Not provided');
  const [city, setCity] = useState('Not provided');
  const [editingField, setEditingField] = useState(null);

  const handleSave = () => {
    setEditingField(null);
  };

  const handleCancel = () => {
    setEditingField(null);
  };

  const handleEdit = (field) => {
    setEditingField(field);
  };

  const renderEditField = (field, label, value, setValue, secureTextEntry = false) => (
    <View style={styles.editContainer}>
      <View style={styles.editHeader}>
        <Text style={styles.editLabel}>{label}</Text>
        <TouchableOpacity onPress={handleCancel} style={styles.cancelButton}>
          <Text style={styles.cancelButtonText}>X</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.editInput}
        value={value}
        onChangeText={setValue}
        secureTextEntry={secureTextEntry}
      />
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Enregistrer</Text>
      </TouchableOpacity>
    </View>
  );

  const renderInfoItem = (field, label, value, secureTextEntry = false) => (
    <View style={styles.infoItem} key={field}>
      <View style={styles.textContainer}>
        <Text style={styles.infoTitle}>{label}</Text>
        <Text style={styles.infoText}>{secureTextEntry ? '**********' : value}</Text>
      </View>
      <TouchableOpacity onPress={() => handleEdit(field)}>
        <Image
          source={require('../assets/icons/Group.jpg')}
          style={styles.editIcon}
        />
      </TouchableOpacity>
    </View>
  );

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
        {editingField === 'Nom et prénom'
          ? (
            <View style={styles.editNameContainer}>
              <View style={styles.editHeader}>
                <Text style={styles.editLabel}>Prenom et nom</Text>
                <TouchableOpacity onPress={handleCancel} style={styles.cancelButton}>
                  <Text style={styles.cancelButtonText}>X</Text>
                </TouchableOpacity>
              </View>
              <TextInput
                style={styles.editInput}
                placeholder="First name"
                value={firstName}
                onChangeText={setFirstName}
              />
              <TextInput
                style={styles.editInput}
                placeholder="Last name"
                value={lastName}
                onChangeText={setLastName}
              />
              <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                <Text style={styles.saveButtonText}>Enregistrer</Text>
              </TouchableOpacity>
            </View>
          )
          : renderInfoItem('Nom et prénom', 'Nom et prénom', `${firstName} ${lastName}`)}

        {editingField === 'Mot de passe'
          ? (
            <View style={styles.editContainer}>
              <View style={styles.editHeader}>
                <Text style={styles.editLabel}>Mot de passe</Text>
                <TouchableOpacity onPress={handleCancel} style={styles.cancelButton}>
                  <Text style={styles.cancelButtonText}>X</Text>
                </TouchableOpacity>
              </View>
              <TextInput
                style={styles.editInput}
                placeholder="Ancien password"
                secureTextEntry={true}
              />
              <TextInput
                style={styles.editInput}
                placeholder="Nouveau password"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                <Text style={styles.saveButtonText}>Enregistrer</Text>
              </TouchableOpacity>
            </View>
          )
          : renderInfoItem('Mot de passe', 'Mot de passe', password, true)}

        {editingField === 'Phone number'
          ? (
            <View style={styles.editContainer}>
              <View style={styles.editHeader}>
                <Text style={styles.editLabel}>Numéro de téléphone</Text>
                <TouchableOpacity onPress={handleCancel} style={styles.cancelButton}>
                  <Text style={styles.cancelButtonText}>X</Text>
                </TouchableOpacity>
              </View>
              <TextInput
                style={styles.editInput}
                placeholder="Country/Region"
                value="United States (+1)"
                editable={false}
              />
              <TextInput
                style={styles.editInput}
                placeholder="Phone number"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
              />
              <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                <Text style={styles.saveButtonText}>Enregistrer</Text>
              </TouchableOpacity>
            </View>
          )
          : renderInfoItem('Phone number', 'Numéro de téléphone', phoneNumber)}

        {editingField === 'Email'
          ? (
            <View style={styles.editContainer}>
              <View style={styles.editHeader}>
                <Text style={styles.editLabel}>Email</Text>
                <TouchableOpacity onPress={handleCancel} style={styles.cancelButton}>
                  <Text style={styles.cancelButtonText}>X</Text>
                </TouchableOpacity>
              </View>
              <TextInput
                style={styles.editInput}
                placeholder="Ancien email"
                value={currentEmail}
                onChangeText={setCurrentEmail}
                editable={false}
              />
              <TextInput
                style={styles.editInput}
                placeholder="Nouveau email"
                value={newEmail}
                onChangeText={setNewEmail}
              />
              <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                <Text style={styles.saveButtonText}>Enregistrer</Text>
              </TouchableOpacity>
            </View>
          )
          : renderInfoItem('Email', 'Email', currentEmail)}

        {editingField === 'Address'
          ? (
            <View style={styles.editContainer}>
              <View style={styles.editHeader}>
                <Text style={styles.editLabel}>Address</Text>
                <TouchableOpacity onPress={handleCancel} style={styles.cancelButton}>
                  <Text style={styles.cancelButtonText}>X</Text>
                </TouchableOpacity>
              </View>
              <TextInput
                style={styles.editInput}
                placeholder="Nouvel Address"
                value={address}
                onChangeText={setAddress}
              />
              <TextInput
                style={styles.editInput}
                placeholder="Ville"
                value={city}
                onChangeText={setCity}
              />
              <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                <Text style={styles.saveButtonText}>Enregistrer</Text>
              </TouchableOpacity>
            </View>
          )
          : renderInfoItem('Address', 'Address', `${address}, ${city}`)}
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
  infoText: {
    fontSize: 14,
    color: '#888',
    paddingVertical: 5,
    marginTop: 5,
  },
  editIcon: {
    width: 29,
    height: 29,
  },
  editContainer: {
    marginTop: 20,
  },
  editHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  editLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  editInput: {
    fontSize: 16,
    color: '#000',
    paddingVertical: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#FFF',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  saveButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  cancelButton: {
    width: 30,
    height: 30,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#000',
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  cancelButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PersonalInformation;
