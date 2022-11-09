import {StyleSheet} from "react-native"
import {THEME} from "../../theme"

export const styles = StyleSheet.create({
    container: {
        paddingVertical: 14,
        justifyContent: "center",
        alignItems: "center",
    },
    loadingText: {
        marginTop: 4,
        color: THEME.COLORS.CAPTION_400,
        fontFamily: THEME.FONT_FAMILY.SANS.REGULAR,
        fontSize: THEME.FONT_SIZE.XS
    },
})
