import {StyleSheet} from "react-native"
import {THEME} from "../../theme"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        padding: 14,
    },
    video: {
        flex: 1,
        borderBottomColor: THEME.COLORS.BACKGROUND_700,
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 8,
    },
    title: {
        color: THEME.COLORS.TEXT,
    },
})
