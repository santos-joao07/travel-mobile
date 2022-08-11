import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, FlatList, View, Text, TouchableOpacity } from 'react-native';

const ListItem = ({ item, onPress }) => {
    return (
        <View style={styles.item}>
            <Image
                source={item.image}
                style={styles.itemPhoto}
                resizeMode="cover"
            />
            <TouchableOpacity
                onPress={onPress}>
                <Text style={styles.itemText}>{item.text} </Text>
                <Text style={styles.itemDescription}>{item.description} </Text>
            </TouchableOpacity>
        </View>
    )
}

export default function LocalizationCard({ data }) {

    const navigation = useNavigation()

    function handleNavigateDetail(value) {

        navigation.navigate('Detail',
            {
                key: value.key,
                text: value.text,
                description: value.description,
                image: value.image,
                fullImage: value.fullImage
            })

    }

    return (
        <FlatList
            contentContainerStyle={styles.container}
            data={data}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={({ key }) => String(key)}
            renderItem={({ item }) => {
                return <ListItem item={item} onPress={() => handleNavigateDetail(item)} id={item.id} />
            }}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        top: 192,
        paddingRight: 32
    },
    itemPhoto: {
        width: 250,
        height: 400,
        margin: 8,
        left: 16,
        borderRadius: 16,
    },
    itemText: {
        fontSize: 20,
        bottom: 80,
        fontWeight: 'bold',
        left: 56,
        color: '#FFF'
    },
    itemDescription: {
        fontSize: 16,
        bottom: 80,
        left: 56,
        color: '#FFF'
    }
});