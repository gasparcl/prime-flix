import {Dimensions, StyleSheet} from "react-native"
import {THEME} from "../../theme"

const headerSize = Dimensions.get('screen').height / 1.5

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    // HEADER
    cover: {
        width: Dimensions.get('screen').width,
        height: headerSize,
        borderRadius: 8,
        justifyContent: "flex-end",
        overflow: "hidden",
    },
    footer: {
        width: "100%",
        height: headerSize / 2,
        padding: 16,
        justifyContent: "flex-end",
        alignItems: 'center'
    },
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
    trailerButton: {
        flex: 1,
        backgroundColor: THEME.COLORS.BACKGROUND_PAPER,
        marginHorizontal: 16
    },
    trailerButtonTitle: {
        color: THEME.COLORS.CAPTION_900,
    },

    // MOVIE LIST
    content: {
        padding: 12,
    },
    subtitle: {
        color: THEME.COLORS.TEXT,
        fontFamily: THEME.FONT_FAMILY.SANS.BOLD,
        fontSize: THEME.FONT_SIZE.MD,
    },
})
