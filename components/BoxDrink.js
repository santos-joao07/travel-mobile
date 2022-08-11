import { StyleSheet, Image, View, ImageBackground, Text } from 'react-native';
import iconRed from '../assets/iconRed.png'

export default function BoxFood() {
    return (
        <View style={styles.boxTextDrink}>
            <ImageBackground
                source={iconRed}
                style={{ width: 80, height: 80 }}>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    boxTextDrink: {
        width: 80,
        height: 80,
        top: 220,
        left: 360,
    },
})