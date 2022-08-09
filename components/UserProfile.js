import React from 'react';
import { Image, StyleSheet } from 'react-native';

export default function UserProfile() {
    return <Image source={require('../assets/userIcon.png')} style={styles.image} />;
}

const styles = StyleSheet.create({
    image: {
        width: 48,
        height: 48,
        left: 24,
        top: 74,
    },
});