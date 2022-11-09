import {createNativeStackNavigator} from "@react-navigation/native-stack"

import {MovieSearch} from "../screens/MovieSearch"
import {MovieDetail} from "../screens/MovieDetail"
import {MovieTrailer} from "../screens/MovieTrailer"

import {THEME} from "../theme"
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
            <Screen
                name="movieDetail"
                component={MovieDetail}
                options={() => ({
                    animation: "fade_from_bottom",
                    title: '',
                    headerShown: true,
                })}
            />
            <Screen
                name="movieTrailer"
                component={MovieTrailer}
                options={() => ({
                    animation: "slide_from_right",
                    title: '',
                    headerShown: true,
                })}
            />
        </Navigator>
    )
}
