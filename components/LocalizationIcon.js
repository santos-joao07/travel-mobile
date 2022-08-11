import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';


export default function LocalizationIcon() {
    return (
        <View style={styles.iconLocalization}>
            <Icon name="map-marker-alt"  size={20} color='white' />
            <Text style={styles.textLocalization}>Firenze, Italia</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    iconLocalization: {
        flexDirection: 'row',
        width: 232,
        height: 52,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d3d3d3',
        opacity: 0.7,
    },
    textLocalization: {
        color: '#FFF',
        left: 12,
    }
});