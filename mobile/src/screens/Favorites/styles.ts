import {Dimensions, StyleSheet} from "react-native"
import {THEME} from "../../theme"

export const styles = StyleSheet.create({
    movieHeader: {
        paddingBottom: 0
    },
    header: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    container: {
        flex: 1,
        paddingBottom: 42,
    },
    poster: {
        height: 200,
        width: 149,
        borderRadius: 4,
        overflow: "hidden",
    },
    buttonDetail: {
        height: 42,
        width: Dimensions.get('screen').width,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonDetailText: {
        color: THEME.COLORS.CAPTION_300,
        fontFamily: THEME.FONT_FAMILY.SANS.BOLD,
        fontSize: THEME.FONT_SIZE.SM,
        marginBottom: 2,
    }
})
