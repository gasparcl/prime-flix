import {Dimensions, StyleSheet} from "react-native"
import {THEME} from "../../theme"

export const styles = StyleSheet.create({
    playContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    play: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: THEME.COLORS.WHITE_OVERLAY,
        alignItems: 'center',
        justifyContent: 'center',
        ...THEME.MIXINS.SHADOW_1
    },
    header: {
        alignItems: 'center',
    },
    headerTitle: {
        color: THEME.COLORS.TEXT,
        fontFamily: THEME.FONT_FAMILY.SERIF.BOLD,
        fontSize: THEME.FONT_SIZE.LG,
        textAlign: 'center',
        width: 200,
    },
    headerMovieDetails: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    headerMovieDetail: {
        color: THEME.COLORS.CAPTION_500,
        fontFamily: THEME.FONT_FAMILY.SANS.REGULAR,
        fontSize: THEME.FONT_SIZE.XS,

        borderRightWidth: 1,
        borderRightColor: THEME.COLORS.CAPTION_500,
        paddingRight: 8,
        marginRight: 8,
    },
    genders: {
        borderRightWidth: 0,
        maxWidth: Dimensions.get('screen').width / 2
    },

    container: {
        padding: 14
    },
    title: {
        color: THEME.COLORS.TEXT,
        fontFamily: THEME.FONT_FAMILY.SANS.BOLD,
        fontSize: THEME.FONT_SIZE.LG,
        textAlign: 'center',
        marginBottom: 8,
    },
    storyline: {
        color: THEME.COLORS.CAPTION_400,
        fontFamily: THEME.FONT_FAMILY.SANS.REGULAR,
        fontSize: THEME.FONT_SIZE.XS,
        textAlign: 'center',
        marginBottom: 16,
    }
})
