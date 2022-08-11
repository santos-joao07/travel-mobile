import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';


export default function CancelIcon() {

    const navigation = useNavigation()

    return (
        <View style={styles.iconCancel}>
            <TouchableOpacity
                onPress={() => { navigation.navigate('Home') }}>
                <Icon name="times" size={32} color='white' />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    iconCancel: {
        width: 56,
        height: 52,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d3d3d3',
        opacity: 0.7,
    },
});