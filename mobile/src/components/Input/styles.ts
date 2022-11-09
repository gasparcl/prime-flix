import {StyleSheet} from "react-native"
import {THEME} from "../../theme"

export const styles = StyleSheet.create({
    container: {
        fontSize: THEME.FONT_SIZE.SM,
        backgroundColor: THEME.COLORS.BACKGROUND_700,
        color: THEME.COLORS.CAPTION_300,
        height: 45,
        borderRadius: 20,
        padding: 14,
    },
})
