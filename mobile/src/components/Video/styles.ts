import {StyleSheet} from "react-native"
import {THEME} from "../../theme"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 28
    },
    video: {
        flex: 1,
        borderBottomColor: THEME.COLORS.BACKGROUND_700,
        borderBottomWidth: 1,
        paddingBottom: 14,
        marginBottom: 14,
    },
    info: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        color: THEME.COLORS.TEXT,
        fontFamily: THEME.FONT_FAMILY.SANS.BOLD,
        fontSize: THEME.FONT_SIZE.SM,
    },
    subtitle: {
        color: THEME.COLORS.CAPTION_400,
        fontFamily: THEME.FONT_FAMILY.SANS.REGULAR,
        fontSize: THEME.FONT_SIZE.XS,
    },
})
