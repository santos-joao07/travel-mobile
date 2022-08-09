import React from 'react';
import { Image, StyleSheet, FlatList, View, Text } from 'react-native';
import piazza from '../assets/piazza.png'


{/* <Image source={require('../assets/piazza.png')} style={styles.image} /> */ }

const data = [
    {
        key: 1,
        text: 'Paisagem',
        image: piazza
    },
    {
        key: 2,
        text: 'Paisagem 2',
        image: "https://vemvoar.voeazul.com.br/dicas-de-destinos/sudeste/muito-alem-da-praia-saiba-o-que-fazer-no-rio-de-janeiro/"
    }
]

const ListItem = ({ item }) => {
    return (
        <View style={styles.item}>
            <Image
               
                style={styles.itemPhoto}
                resizeMode="cover"
            />
            <Text style={styles.itemText}>{item.text} {item.image}</Text>
        </View>
    )
}



export default function CardLcalization() {


    return (
        <FlatList
            /* contentContainerStyle */
            data={data}
            horizontal
            renderItem={({ item }) => {
                return <ListItem item={item} />
            }}
        />


    );
}

const styles = StyleSheet.create({
    container: {
        top: 200,
    },
    itemPhoto: {
        width: 240,
        height: 362,
        margin: 8,
        left: 24,
        borderRadius: 16,
    },
});