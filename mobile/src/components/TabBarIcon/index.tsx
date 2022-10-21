import {cloneElement} from "react"
import {THEME} from "../../theme"

interface TabBarIconProps {
    Icon: JSX.Element
    FocusedIcon?: JSX.Element
    focused: boolean
    color: string
    size: number
}

export function TabBarIcon({
    Icon,
    FocusedIcon,
    size,
    focused,
}: TabBarIconProps) {
    return cloneElement(focused && FocusedIcon ? FocusedIcon : Icon, {
        size,
        color: focused ? THEME.COLORS.PRIMARY : THEME.COLORS.DISABLED,
    })
}
