import {StyleSheet, Dimensions} from "react-native"
import {THEME} from "../../theme"

export const styles = StyleSheet.create({
    container: {
        padding: 12,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    control: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    content: {
        marginTop: 16,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: THEME.COLORS.BACKGROUND_600
    },
    title: {
        color: THEME.COLORS.TEXT,
        fontFamily: THEME.FONT_FAMILY.SANS.BOLD,
        fontSize: THEME.FONT_SIZE.MD,
    },

    impression: {
        maxWidth: Dimensions.get('screen').width - 60,
        padding: 14
    },
    impressionHeader: {
        flexDirection: 'row',
    },
    review: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    author: {
        marginLeft: 16
    },
    name: {
        color: THEME.COLORS.TEXT,
        fontFamily: THEME.FONT_FAMILY.SANS.BOLD,
        fontSize: THEME.FONT_SIZE.MD,
    },
    username: {
        color: THEME.COLORS.CAPTION_300,
        fontFamily: THEME.FONT_FAMILY.SANS.REGULAR,
        fontSize: THEME.FONT_SIZE.SM,
    },
    rating: {
        flexDirection: 'row',
        marginTop: 8,
    },
    ratingText: {
        color: THEME.COLORS.TEXT,
        fontFamily: THEME.FONT_FAMILY.SANS.BOLD,
        fontSize: THEME.FONT_SIZE.SM,
        marginLeft: 8,
    },
    reviewContent: {
        marginTop: 16,
        color: THEME.COLORS.CAPTION_300,
        fontFamily: THEME.FONT_FAMILY.SANS.REGULAR,
        fontSize: THEME.FONT_SIZE.XS,
    }
})
