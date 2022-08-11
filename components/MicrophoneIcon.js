import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';


export default function MicrophoneIcon() {
    return (
        <View style={styles.iconMicrophone}>
            <Icon name="microphone"  size={24} color='white' />
        </View>
    )
}

const styles = StyleSheet.create({
    iconMicrophone: {
        width: 56,
        height: 52,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d3d3d3',
        opacity: 0.7,
    },
});