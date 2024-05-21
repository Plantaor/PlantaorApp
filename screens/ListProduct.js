import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

const ListProduct = () => {
    const products = [
        { id: 1, name: "Sex boost", price: 24.99, image: require('../assets/icons/icon_sexboost.svg') },
        { id: 2, name: "Neuro-calm", price: 24.99 },
        { id: 3, name: "Immuno-T", price: 24.99 },
        { id: 4, name: "Transit", price: 24.99 },
    ];

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <View style={styles.item}>
                <View style={styles.imageContainer}>
                    {item.image && <Image source={item.image} style={styles.image} />}
                </View>
            </View>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>${item.price}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                numColumns={2}
            />
        </View>
    );
};

export default ListProduct;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    itemContainer: {
        alignItems: 'center',
        margin: 10,
    },
    item: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        width: 147,
        height: 126,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        borderWidth: 2,
        borderColor: 'black',
    },
    imageContainer: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    name: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 5,
        fontFamily: 'sans-serif',
    },
    price: {
        fontSize: 14,
        color: 'gray',
        textAlign: 'center',
        marginTop: 2,
        fontFamily: 'sans-serif',
    },
});