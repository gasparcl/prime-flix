import {StyleSheet} from "react-native"
import { THEME } from "../../theme"

export const styles = StyleSheet.create({
    container: {
        padding: 14
    },
    listContainer: {
        marginBottom: 4,
    },
    title: {
        color: THEME.COLORS.TEXT,
        fontFamily: THEME.FONT_FAMILY.SANS.BOLD,
        fontSize: THEME.FONT_SIZE.MD,
        marginBottom: 16
    },

    listItem: {
        marginRight: 12,
        paddingVertical: 6,
        width: 100,
    },
    avatar: {
        // width: 138,
        // height: 175,
        width: 100,
        height: 127,
        borderRadius: 4,
    },
    character: {
        color: THEME.COLORS.TEXT,
        fontFamily: THEME.FONT_FAMILY.SANS.BOLD,
        fontSize: THEME.FONT_SIZE.SM,
        marginTop: 4
    },
    name: {
        color: THEME.COLORS.CAPTION_300,
        fontFamily: THEME.FONT_FAMILY.SANS.REGULAR,
        fontSize: THEME.FONT_SIZE.XS,
    }
})
