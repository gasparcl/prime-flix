import {StyleSheet} from "react-native"
import {THEME} from "../../theme"

export const styles = StyleSheet.create({
    container: {
        backgroundColor: THEME.COLORS.BACKGROUND_900,
        height: 85,

        alignItems: 'center',
        justifyContent: 'center',

        paddingTop: 35
    },
    title: {
        color: THEME.COLORS.TEXT,
        fontFamily: THEME.FONT_FAMILY.SANS.BOLD,
        fontSize: THEME.FONT_SIZE.SM,
        textTransform: 'uppercase'
    }
})
