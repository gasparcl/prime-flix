import {StyleSheet, Dimensions} from "react-native"

const headerSize = Dimensions.get("screen").height / 1.5

export const styles = StyleSheet.create({
    cover: {
        width: Dimensions.get("screen").width,
        height: headerSize,
        overflow: "hidden",
        position: "relative",
    },
    container: {
        flex: 1,
        padding: 16,
        height: headerSize / 2,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    controls: {
        marginTop: 40,
        padding: 14,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    emptyBox: {
        width: 32,
        height: 32
    }
})
