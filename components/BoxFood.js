import { StyleSheet, Image, View, ImageBackground, Text } from 'react-native';
import iconYellow from '../assets/iconYellow.png'
import utensils from '../assets/utensils.png'

export default function BoxFood() {
    return (
        <View style={styles.boxText}>
            <ImageBackground
                source={iconYellow}
                style={[{ width: '100%', height: '100%' }, styles.imageIcon]}>
                <Image source={utensils} style={{ width: '50%', height: '50%' }} />
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    boxText: {
        width: 48,
        height: 40,
        top: 200,
        left: 8
    },
    imageIcon: {
        alignItems: 'center',
        justifyContent: 'center'
    },
})