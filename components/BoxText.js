import { StyleSheet, Image, View, ImageBackground, Text } from 'react-native';
import iconPurple from '../assets/iconPurple.png'
import cathedral from '../assets/cathedral.png'

export default function BoxText() {
    return (
        <View style={styles.boxText}>
            <ImageBackground
                source={iconPurple}
                style={[{ width: '100%', height: '100%' }, styles.imageIcon]}>
                <Image source={cathedral} style={{width: 48, height: 48 }}/>
                <Text style={styles.textIcon}>
                    Battistero di
                    San Giovanni
                </Text>

            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    boxText: {
        width: 150,
        height: 150,
        top: 320,
        left: 72
    },
    imageIcon: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    textIcon: {
        fontSize: 16,
        width: 120,
        color: '#FFFFFF',
        paddingTop: 10,
    }
})