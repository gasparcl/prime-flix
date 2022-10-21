import {useMemo} from "react"

import {
    Text,
    TouchableOpacity,
    TouchableOpacityProps,
    StyleProp,
    TextStyle,
} from "react-native"

import {styles} from "./styles"

interface ButtonProps extends TouchableOpacityProps {
    title?: string
    titleStyle?: StyleProp<TextStyle>
    startIcon?: any
    endIcon?: any
    disabled?: boolean
}

export function Button({
    title,
    style,
    titleStyle,
    startIcon,
    endIcon,
    disabled,
    onPress,
    ...props
}: ButtonProps) {
    const buttonStyles = useMemo(() => {
        const buttonStyles = [styles.button, style]

        if (disabled) {
            buttonStyles.push(styles.buttonDisabled)
        }

        return buttonStyles
    }, [style, disabled])

    return (
        <TouchableOpacity
            style={buttonStyles}
            activeOpacity={disabled ? 1 : 0.7}
            onPress={disabled ? undefined : onPress}
            {...props}
        >
            {startIcon}
            {title && (
                <Text style={[styles.buttonTitle, titleStyle]}>{title}</Text>
            )}
            {endIcon}
        </TouchableOpacity>
    )
}
