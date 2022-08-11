import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function AvaliationView({ figure, title }) {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={figure}
            />
            <View style={styles.description}>
                <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 20 }}>
                    {title}
                </Text>
                <View style={styles.stars}>
                    <Icon name="star" size={20} color='#6F61FE' />
                    <Icon name="star" size={20} color='#6F61FE' />
                    <Icon name="star" size={20} color='#6F61FE' />
                    <Icon name="star" size={20} color='#6F61FE' />
                    <Icon name="star" size={20} color='#6F61FE' />
                </View>
            </View>

            <View style={styles.info}>
                <Icon name="info-circle" size={20} color='#6F61FE' />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        top: 548,
        backgroundColor: '#FFF',
        width: '100%',
        height: 100,
        borderRadius: 20,
        padding: 20
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 20,
    },
    description: {
        flexDirection: 'column',
        height: '100%',
        width: 280

    },
    stars: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '50%'
    },
    info: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        backgroundColor: '#6979F733',
        width: 36,
        height: 36
    }

})