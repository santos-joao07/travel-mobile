import { StyleSheet, Text, View } from 'react-native';
import UserProfile from '../components/UserProfile'
import SearchBar from '../components/SearchBar'
import LocalizationCard from '../components/LocalizationCard'
import LocalizationBar from '../components/LocalizationBar'
import piazza from '../assets/piazza.png'
import palazzo from '../assets/palazzo.png'
import piazzaDuomo from '../assets/piazza-duomo.png'
import palazzoVecchio from '../assets/palazzo-vecchio.png'

const data = [
    {
        key: 1,
        text: 'Piazza Duomo',
        description: '50 metri da te',
        image: piazza,
        fullImage: piazzaDuomo
    },
    {
        key: 2,
        text: 'Palazzo Vecchio',
        description: '400 metri da te',
        image: palazzo,
        fullImage: palazzoVecchio
    },
]

export default function Home({ navigation }) {

    return (
        <View style={styles.container}>
            <UserProfile />
            <Text style={styles.titleScreen}>Benvenuto Andrea</Text>
            <SearchBar
                placeholder={'Ricerca'}
                keyboardType="email-address"
                style={{ top: 124 }}
            />
            <Text style={styles.captionScreen}>Luoghi più visitati</Text>
            <LocalizationCard
                data={data}
            />
            <LocalizationBar />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F8F8',
    },
    titleScreen: {
        left: 24,
        top: 116,
        fontSize: 36,
        fontWeight: '700',
        letterSpacing: -0.2,
        color: '#000000'
    },
    captionScreen: {
        left: 24,
        top: 164,
        fontSize: 28,
        fontWeight: '700',
        letterSpacing: -0.2,
        color: '#000000'
    }
});