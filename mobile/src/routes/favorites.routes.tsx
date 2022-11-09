import {createNativeStackNavigator} from "@react-navigation/native-stack"

import {Favorites} from "../screens/Favorites"

import {THEME} from "../theme"
import {styles} from "./styles"

const {Navigator, Screen} = createNativeStackNavigator()

export function FavoritesRoutes() {
    return (
        <Navigator
            screenOptions={{
                statusBarTranslucent: true,
                headerShown: false,
                headerTransparent: true,
                headerTitleStyle: styles.headerTitleStyle,
                headerTintColor: THEME.COLORS.TEXT,
                headerTitleAlign: "center",
                statusBarAnimation: "slide",
            }}
        >
            <Screen name="root" component={Favorites} />
        </Navigator>
    )
}
