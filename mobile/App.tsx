import {View, StyleSheet, StatusBar} from "react-native"
import {SafeAreaProvider} from "react-native-safe-area-context"

import {
    useFonts,
    Roboto_400Regular,
    Roboto_700Bold,
    Roboto_900Black,
} from "@expo-google-fonts/roboto"

import {
    Philosopher_400Regular,
    Philosopher_700Bold,
    Philosopher_400Regular_Italic,
} from "@expo-google-fonts/philosopher"

import {THEME} from "./src/theme"

import {Loading} from "./src/components/Loading"
import {Routes} from "./src/routes"

export default function App() {
    const [fontsLoaded] = useFonts({
        Roboto_400Regular,
        Roboto_700Bold,
        Roboto_900Black,
        Philosopher_400Regular,
        Philosopher_700Bold,
        Philosopher_400Regular_Italic,
    })

    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="transparent"
                    translucent
                />

                {fontsLoaded ? <Routes /> : <Loading />}
            </View>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: THEME.COLORS.BACKGROUND,
    },
})
