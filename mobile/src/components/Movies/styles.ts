import {StyleSheet} from "react-native"
import {THEME} from "../../theme"

export const styles = StyleSheet.create({
    container: {
        padding: 12,
    },
    content: {
        marginTop: 16,
    },
    cover: {
        width: 112,
        height: 150,
        borderRadius: 4,
        justifyContent: "flex-end",
        overflow: "hidden",
        marginRight: 6,
    },
    title: {
        color: THEME.COLORS.TEXT,
        fontFamily: THEME.FONT_FAMILY.SANS.BOLD,
        fontSize: THEME.FONT_SIZE.MD,
    },
})