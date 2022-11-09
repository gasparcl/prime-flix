import {createNativeStackNavigator} from "@react-navigation/native-stack"

import {Home} from "../screens/Home"

import {THEME} from "../theme"
import {styles} from './styles'

const {Navigator, Screen} = createNativeStackNavigator()

export function HomeRoutes() {
    return (
        <Navigator
            screenOptions={{
                statusBarTranslucent: true,
                headerShown: false,
                headerTransparent: true,
                headerTitleStyle: styles.headerTitleStyle,
                headerTintColor: THEME.COLORS.TEXT,
                headerTitleAlign: 'center',
                statusBarAnimation: 'slide',
            }}
        >
            <Screen
                name="root"
                component={Home}
            />
        </Navigator>
    )
}
