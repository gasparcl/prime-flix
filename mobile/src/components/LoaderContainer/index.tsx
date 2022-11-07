import {View, ViewProps} from "react-native"
import {Loading} from "../Loading"

interface LoaderContainerProps extends ViewProps {
    isLoading: boolean
}

export function LoaderContainer({
    isLoading,
    children,
    ...props
}: LoaderContainerProps) {
    return <View {...props}>{isLoading ? <Loading /> : children}</View>
}
