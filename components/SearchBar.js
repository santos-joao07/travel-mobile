import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const SearchBar = props => {

    return (
        <View style={[styles.inputArea, props.style]}>
            <Icon name="search" style={styles.iconSearch} size={20} />
            <TextInput
                {...props}
                placeholder={props.placeholder}
                style={styles.input}
                keyboardType={props.type ? props.type : 'default'}
            />
            <Icon name="microphone" style={styles.iconMicrophone} size={20} />
        </View>
    );
};

const styles = StyleSheet.create({
    inputArea: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        borderWidth: 1,
        borderRadius: 16,
        marginTop: 12,
        height: 55,
        left: 24,
    },
    input: {
        width: '90%',
        fontWeight: '400',
        color: '#d3d3d3',
        paddingLeft: 37,
        fontSize: 16,
        letterSpacing: 0.5,
    },
    iconSearch: {
        paddingRight: 16,
        left: 32,
        color: '#d3d3d3',
    },
    iconMicrophone: {
        paddingLeft: 16,
        right: 32,
        color: '#d3d3d3',
    },
});

export default SearchBar;