import {TextInput, TextInputProps} from "react-native"

import {THEME} from "../../theme"
import {styles} from "./styles"

export function Input(props: TextInputProps) {
    return (
        <TextInput
            style={styles.container}
            placeholderTextColor={THEME.COLORS.CAPTION_400}
            {...props}
        />
    )
}
