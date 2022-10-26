import {ScrollView, View, ViewProps} from "react-native"

import {styles} from "./styles"

export function Background({style, children, ...props}: ViewProps) {
    return (
        <ScrollView {...props} style={[styles.container, style]}>
            <View style={styles.content}>{children}</View>
        </ScrollView>
    )
}
