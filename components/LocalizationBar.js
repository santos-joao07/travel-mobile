import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const LocalizationBar = props => {

    return (
        <View style={[styles.inputArea, props.style]}>
            <Icon name="home" style={styles.icon} size={28} />
            <Icon name="map-marker-alt" style={styles.icon} size={28} />
            <Icon name="street-view" style={styles.icon} size={28} />
            <Icon name="file-alt" style={styles.icon} size={28} />
        </View>
    );
};

const styles = StyleSheet.create({
    inputArea: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%',
        bottom: 44,
        borderRadius: 16,
        height: 55,
        left: 24,
        paddingRight: 28,
        paddingLeft: 28,
        backgroundColor: '#FFF'
    },
    icon: {
        color: '#d3d3d3',
    },
});

export default LocalizationBar;