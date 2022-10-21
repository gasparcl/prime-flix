import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import {Octicons, MaterialIcons} from "@expo/vector-icons"

import {TabBarIcon} from "../components/TabBarIcon"
import {Home} from "../screens/Home"

import {styles} from "./styles"

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
                component={Home}
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
        </Navigator>
    )
}
