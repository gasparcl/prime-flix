import {View, ActivityIndicator, ActivityIndicatorProps} from "react-native"
import {THEME} from "../../theme"
import {styles} from "./styles"

interface LoadingProps extends ActivityIndicatorProps {}

export function Loading(props: LoadingProps) {
    return (
        <View style={styles.container}>
            <ActivityIndicator
                size={40}
                color={THEME.COLORS.PRIMARY}
                {...props}
            />
        </View>
    )
}
