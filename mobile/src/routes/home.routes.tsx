import {createNativeStackNavigator} from "@react-navigation/native-stack"

import {THEME} from "../theme"

import {Home} from "../screens/Home"
import {MovieDetail} from "../screens/MovieDetail"
import {MovieTrailer} from "../screens/MovieTrailer"

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
