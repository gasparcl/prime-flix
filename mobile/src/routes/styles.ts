import {StyleSheet} from "react-native"
import {THEME} from "../theme"

export const styles = StyleSheet.create({
    headerStyle: {},
    headerTitleStyle: {
        color: THEME.COLORS.CAPTION_900,
        fontFamily: THEME.FONT_FAMILY.SANS.BOLD,
        fontSize: THEME.FONT_SIZE.MD,
    },
    tabBarStyle: {
        backgroundColor: 'transparent',
        position: 'absolute',
        borderTopWidth: 0,
        height: 60,

        left: 0,
        bottom: 0,
        right: 0,
        elevation: 0, // this solved the triangle type view problem in android
    },
    tabBarLabelStyle: {
        color: THEME.COLORS.CAPTION_500,
        paddingBottom: 6
    },
    tabBarItemStyle: {
        backgroundColor: 'rgba(0,0,0,0.8)',
    }
})
