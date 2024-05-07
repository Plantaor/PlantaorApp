import React from 'react'
import { StyleSheet, Text, View, FlatList, Image } from 'react-native'

const ListProduct = () => {
    const products=[
        {id:1,name:"Sex boost",price:24.99, image:require('../assets/icons/icon_sexboost.svg')},
        {id:2,name:"Neuro-calm",price:24.99},
        {id:3,name:"Immuno-T",price:24.99},
        {id:4,name:"Transit",price:24.99},
    ];

    const renderItem=({item})=> (
        <View style={styles.item}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                renderItem={renderItem}
                keyExtractor={item=>item.id}
                numColumns={2}
            />
        </View>
    )
}

export default ListProduct

const styles = StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:'#fff',
        padding: 20,
    },
    item:{
        width: 100,
        height: 100,
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
        // transform: [{ perspective: 500 }, { rotateX: '45deg'}, { rotateY: '45deg' }],
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 16,
        color: 'gray',
    },
});
