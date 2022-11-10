import {StyleSheet} from "react-native"
import {THEME} from "../../theme"

export const styles = StyleSheet.create({
    container: {
        height: 80,
    },
    title: {
        color: THEME.COLORS.TEXT,
        fontSize: THEME.FONT_SIZE.XS,
        fontFamily: THEME.FONT_FAMILY.SANS.BOLD,
        marginBottom: 2,
    },
    provider: {
        marginRight: 4,
        padding: 4,
        marginBottom: 12,
    },
    logo: {
        width: 40,
        height: 40,
        borderRadius: 4,
    },
})
