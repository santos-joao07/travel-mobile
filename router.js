import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home'
import Detail from './screens/Detail'

const { Navigator, Screen } = createNativeStackNavigator();

const Router = () => {

    return (
        <NavigationContainer>
            <Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Screen name="Home" component={Home} />
                <Screen name="Detail" component={Detail} />

            </Navigator>

        </NavigationContainer>
    )
}

export default Router;