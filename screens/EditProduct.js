
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { API_URL } from '@env';

const EditProduct = ({ route, navigation }) => {
    const { product } = route.params;

    // États pour chaque propriété du produit
    const [name, setName] = useState(product.name);
    const [description, setDescription] = useState(product.description);
    const [lambdaUserPrice, setLambdaUserPrice] = useState(product.lambdaUserPrice);
    const [pharmacistPrice, setPharmacistPrice] = useState(product.pharmacistPrice);
    const [size, setSize] = useState(product.size);
    const [datasheet, setDatasheet] = useState(product.datasheet);
    const [qty, setQty] = useState(product.qty);
    const [categoryId, setCategoryId] = useState(product.category);

    const handleSave = async () => {
        try {
            const token = await AsyncStorage.getItem('userToken');
            const response = await axios.put(`${API_URL}/products/${product._id}`, {
                name,
                description,
                lambdaUserPrice,
                pharmacistPrice,
                size,
                datasheet,
                qty,
                categoryId
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.status === 200) {
                alert('Produit modifié avec succès');
                navigation.goBack(); // Retourner à la liste des produits après la modification
            }
        } catch (error) {
            console.error('Erreur lors de la modification du produit:', error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Modifier le produit</Text>
            <Text >Nom:</Text>
            <TextInput 
                value={name} 
                onChangeText={setName} 
                placeholder="Nom" 
                style={styles.input} 
            />
            <Text >Description:</Text>
            <TextInput 
                value={description} 
                onChangeText={setDescription} 
                placeholder="Description" 
                style={styles.input} 
            />

            <Text >Description:</Text>
            <TextInput 
                value={lambdaUserPrice.toString()} 
                onChangeText={setLambdaUserPrice} 
                placeholder="Prix utilisateur lambda" 
                keyboardType="numeric"
                style={styles.input} 
            />
            <TextInput 
                value={pharmacistPrice.toString()} 
                onChangeText={setPharmacistPrice} 
                placeholder="Prix pharmacien" 
                keyboardType="numeric"
                style={styles.input} 
            />
            <TextInput 
                value={size} 
                onChangeText={setSize} 
                placeholder="Taille" 
                style={styles.input} 
            />
            <TextInput 
                value={datasheet} 
                onChangeText={setDatasheet} 
                placeholder="Fiche technique" 
                style={styles.input} 
            />
            <TextInput 
                value={qty.toString()} 
                onChangeText={setQty} 
                placeholder="Quantité" 
                keyboardType="numeric"
                style={styles.input} 
            />
        
            <Button title="Enregistrer" onPress={handleSave} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 15,
    },
});

export default EditProduct;
