import { StyleSheet, Text, View } from 'react-native';
import UserProfile from './components/UserProfile'
import SearchBar from './components/SearchBar'
import CardLocalization from './components/CardLocalization'



export default function App() {

  return (
    <View style={styles.container}>
      <UserProfile />
      <Text style={styles.titleScreen}>Benvenuto Andrea</Text>
      <SearchBar 
        placeholder={'Ricerca'}
        style={{top: 124}}
        />
      <Text style={styles.captionScreen}>Luoghi più visitati</Text>
      <CardLocalization />
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
