import { StyleSheet, View, ImageBackground } from 'react-native';
import { useRoute } from '@react-navigation/native'
import CancelIcon from '../components/CancelIcon'
import LocalizationIcon from '../components/LocalizationIcon'
import MicrophoneIcon from '../components/MicrophoneIcon'
import BoxText from '../components/BoxText'
import BoxFood from '../components/BoxFood'
import BoxDrink from '../components/BoxDrink'
import AvaliationView from '../components/AvaliationView'

export default function Detail() {

    const route = useRoute()
    const { key, text, description, image, fullImage } = route.params

   /*  console.log({ key, text, description, image, fullImage }) */


    return (
        <View style={styles.container}>
            <ImageBackground
                source={fullImage}
                style={{ width: '100%', height: '100%' }}
            >
                <View style={styles.headerBar}>
                    <CancelIcon />
                    <LocalizationIcon />
                    <MicrophoneIcon />
                </View>
                <BoxFood />
                <BoxDrink />
                <BoxText />
                <AvaliationView 
                figure={fullImage}
                title={text}
                />
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F8F8',
    },
    headerBar: {
        flexDirection: 'row',
        width: '90%',
        top: 80,
        left: 20,
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});