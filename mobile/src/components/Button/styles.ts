import {StyleSheet} from "react-native"
import {THEME} from "../../theme"

export const styles = StyleSheet.create({
    button: {
        backgroundColor: THEME.COLORS.PRIMARY,
        padding: 8,
        borderRadius: 4,

        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    buttonDisabled: {
        backgroundColor: THEME.COLORS.CAPTION_300,
    },
    buttonTitle: {
        color: THEME.COLORS.TEXT,
        fontFamily: THEME.FONT_FAMILY.SANS.BOLD,
        fontSize: THEME.FONT_SIZE.SM,
        marginHorizontal: 16,
    },
})
