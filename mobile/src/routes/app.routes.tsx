import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import {Octicons, MaterialIcons} from "@expo/vector-icons"

import {styles} from "./styles"

import {TabBarIcon} from "../components/TabBarIcon"
import {Home} from "../screens/Home"
import {Favorites} from "../screens/Favorites"
import {Preferences} from "../screens/Preferences"

const {Navigator, Screen} = createBottomTabNavigator()

export function AppRoutes() {
    return (
        <Navigator
            initialRouteName="home"
            screenOptions={{
                headerShown: false,
                headerStyle: styles.headerStyle,
                headerTitleStyle: styles.headerTitleStyle,
                tabBarStyle: styles.tabBarStyle,
                tabBarLabelStyle: styles.tabBarLabelStyle,
                tabBarItemStyle: styles.tabBarItemStyle,
            }}
        >
            <Screen
                name="home"
                component={Home}
                options={{
                    title: 'Início',
                    tabBarIcon: (props) => (
                        <TabBarIcon
                            {...props}
                            Icon={<Octicons name="home" />}
                        />
                    ),
                }}
            />
            <Screen
                name="favorites"
                component={Favorites}
                options={{
                    title: 'Favoritos',
                    tabBarIcon: (props) => (
                        <TabBarIcon
                            {...props}
                            Icon={<MaterialIcons name="favorite-border" />}
                            FocusedIcon={<MaterialIcons name="favorite" />}
                        />
                    ),
                }}
            />
            <Screen
                name="preferences"
                component={Preferences}
                options={{
                    title: 'Preferências',
                    tabBarIcon: (props) => (
                        <TabBarIcon
                            {...props}
                            Icon={<Octicons name="gear" />}
                        />
                    ),
                }}
            />
        </Navigator>
    )
}
