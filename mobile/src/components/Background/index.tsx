import {ScrollView, View, ViewProps} from "react-native"

import {styles} from "./styles"

interface BackgroundProps extends ViewProps {
    component?: typeof ScrollView | typeof View
}

export function Background({
    style,
    children,
    component: Component = ScrollView,
    ...props
}: BackgroundProps) {
    return (
        <Component {...props} style={[styles.container, style]}>
            <View style={styles.content}>{children}</View>
        </Component>
    )
}
