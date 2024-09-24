import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_URL } from '@env';
import * as FileSystem from 'expo-file-system'; // Pour lire les fichiers
import RNPickerSelect from 'react-native-picker-select'; // Import si vous utilisez RNPickerSelect

const AddProduct = ({ navigation }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [lambdaUserPrice, setLambdaUserPrice] = useState('');
  const [pharmacistPrice, setPharmacistPrice] = useState('');
  const [size, setSize] = useState('');
  const [qty, setQty] = useState('');
  const [category, setCategory] = useState('');
  const [datasheet, setDatasheet] = useState('');
  const [image, setImage] = useState([]);
  const [categorieList, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      const response = await axios.get(`${API_URL}/categories`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCategories(response.data);
      console.log("les categorie récupérer sont", response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des catégories", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);



  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsMultipleSelection: true,
      quality: 1,
    });
  
    if (!result.canceled && result.assets && result.assets.length > 0) {
      const selectedImages = await Promise.all(
        result.assets.map(async (asset) => {
          const base64 = await FileSystem.readAsStringAsync(asset.uri, { encoding: 'base64' });
          return `data:image/jpeg;base64,${base64}`; // Préfixe base64 pour indiquer le type MIME
        })
      );
      setImage(selectedImages);
    }
  };
  

const handleAddProduct = async () => {
  try {
    const token = await AsyncStorage.getItem('userToken');
    const formData = new FormData();

    // Ajouter les autres champs du produit
    formData.append('name', name);
    formData.append('description', description);
    formData.append('lambdaUserPrice', parseFloat(lambdaUserPrice));
    formData.append('pharmacistPrice', parseFloat(pharmacistPrice));
    formData.append('size', size);
    formData.append('qty', parseInt(qty, 10));
    formData.append('categoryId', category); 
    formData.append('datasheet', datasheet);

    
    // Ajouter les images (base64)
    image.forEach((img, index) => {
      formData.append(`images[${index}]`, img); // Les images sont envoyées comme un tableau
    });

    // Envoyer la requête POST avec formData
    await axios.post(`${API_URL}/products`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });

    alert('Product added successfully!');
    navigation.goBack();
  } catch (error) {
    console.error('Error adding product:', error);
    alert('An error occurred while adding the product.');
  }
};

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.subHeader}>Ajouter un produit</Text>
      </View>
      <ScrollView>
        <Text>Nom de produit:</Text>
        <TextInput
          style={styles.input}
          placeholder="Nom du produit"
          value={name}
          onChangeText={setName}
        />
        <Text>Description:</Text>
        <TextInput
          style={styles.input}
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
        />
        <Text>Prix de lambda:</Text>
        <TextInput
          style={styles.input}
          placeholder="Prix Lambda"
          keyboardType="numeric"
          value={lambdaUserPrice}
          onChangeText={setLambdaUserPrice}
        />
        <Text>Prix de pharmacienne:</Text>
        <TextInput
          style={styles.input}
          placeholder="Prix Pharmacien"
          keyboardType="numeric"
          value={pharmacistPrice}
          onChangeText={setPharmacistPrice}
        />
        <Text>Size:</Text>
        <TextInput
          style={styles.input}
          placeholder="Taille"
          value={size}
          onChangeText={setSize}
        />
        <Text>Quantité:</Text>
        <TextInput
          style={styles.input}
          placeholder="Quantité"
          keyboardType="numeric"
          value={qty}
          onChangeText={setQty}
        />
        <Text>Catégorie:</Text>
        <RNPickerSelect
          onValueChange={(value) => setCategory(value)}
          items={categorieList.map(cat => ({ label: cat.name, value: cat._id }))}
          placeholder={{ label: "Sélectionnez une catégorie", value: null }}
        />
        <Text>URL de la fiche technique:</Text>
        <TextInput
          style={styles.input}
          placeholder="URL de la fiche technique"
          value={datasheet}
          onChangeText={setDatasheet}
        />
        <Text>Images:</Text>
        <View style={styles.containerImage}>
          <Button title="Choisir des images" onPress={pickImage} color="grey" />
          {image && image.map((imgUri, index) => (
            <Image key={index} source={{ uri: imgUri }} style={styles.image} />
          ))}
        </View>
      </ScrollView>
      <Button style={styles.button} title="Ajouter le produit" onPress={handleAddProduct} />
    </View>
  );
};

const styles = StyleSheet.create({
  subHeader: {
    marginTop: 20,
    marginBottom:30,
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    color: 'green',
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 10,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  containerImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    margin:10,
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
  button: {
    backgroundColor: 'green',
    color: 'green',
  },
});

export default AddProduct;
