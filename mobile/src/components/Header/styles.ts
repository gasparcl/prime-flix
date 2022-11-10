import {StyleSheet} from "react-native"
import {THEME} from "../../theme"

export const styles = StyleSheet.create({
    container: {
        backgroundColor: THEME.COLORS.BACKGROUND_900,
        height: 85,
        paddingTop: 35,
        paddingHorizontal: 14,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        color: THEME.COLORS.TEXT,
        fontFamily: THEME.FONT_FAMILY.SANS.BOLD,
        fontSize: THEME.FONT_SIZE.SM,
        textTransform: 'uppercase'
    },
    emptyBox: {
        width: 32,
        height: 32
    }
})
