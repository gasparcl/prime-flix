import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"

import {AppRoutes} from "./app.routes"

const {Navigator, Screen} = createNativeStackNavigator()

export function Routes() {
    return (
        <NavigationContainer>
            <Navigator
                initialRouteName="public"
                screenOptions={{
                    statusBarAnimation: "slide",
                    statusBarTranslucent: true,
                    headerShown: false,
                }}
            >
                <Screen name="public" component={AppRoutes} />
            </Navigator>
        </NavigationContainer>
    )
}
