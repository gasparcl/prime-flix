import {createNativeStackNavigator} from "@react-navigation/native-stack"

import {THEME} from "../theme"

import {MovieSearch} from "../screens/MovieSearch"

import {styles} from './styles'

const {Navigator, Screen} = createNativeStackNavigator()

export function SearchRoutes() {
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
                component={MovieSearch}
            />
        </Navigator>
    )
}
