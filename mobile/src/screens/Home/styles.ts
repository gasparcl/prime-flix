import {StyleSheet} from "react-native"
import {THEME} from "../../theme"

export const styles = StyleSheet.create({
    title: {
        color: THEME.COLORS.TEXT,
        fontFamily: THEME.FONT_FAMILY.SERIF.BOLD,
        fontSize: THEME.FONT_SIZE.LG,
        textAlign: 'center',
        width: 200,
        marginBottom: 24
    },
    controls: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    control: {
        flex: 1,
        alignItems: 'center'
    },
    controlText: {
        color: THEME.COLORS.TEXT,
        fontFamily: THEME.FONT_FAMILY.SANS.REGULAR,
        fontSize: THEME.FONT_SIZE.XS,
        marginTop: 6
    },
    controlButton: {
        flex: 1,
        backgroundColor: THEME.COLORS.BACKGROUND_PAPER,
        marginHorizontal: 16
    },
    controlButtonTitle: {
        color: THEME.COLORS.CAPTION_900,
    },
})
