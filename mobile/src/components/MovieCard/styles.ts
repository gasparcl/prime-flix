import {StyleSheet} from "react-native"
import { THEME } from "../../theme"

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    poster: {
        width: 112,
        height: 150,
    },
    content: {
        flex: 1,
        paddingLeft: 14,
    },
    title: {
        color: THEME.COLORS.TEXT,
        fontFamily: THEME.FONT_FAMILY.SANS.BOLD,
        fontSize: THEME.FONT_SIZE.SM
    },

    detail: {
        flexDirection: 'row',
        marginVertical: 6
    },
    detailText: {
        color: THEME.COLORS.CAPTION_500,
        fontFamily: THEME.FONT_FAMILY.SANS.REGULAR,
        fontSize: THEME.FONT_SIZE.XS,

        borderRightWidth: 1,
        borderRightColor: THEME.COLORS.CAPTION_500,
        paddingRight: 8,
        marginRight: 8,
    },
    overview: {
        color: THEME.COLORS.CAPTION_400,
        fontFamily: THEME.FONT_FAMILY.SANS.REGULAR,
        fontSize: THEME.FONT_SIZE.XS
    }
})
