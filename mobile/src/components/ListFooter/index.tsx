import {View, Text} from "react-native"

import {Loading} from "../Loading"

import {styles} from "./styles"

interface ListFooterProps {
    isLoading: boolean
    loadingText?: string
}

export function ListFooter({isLoading, loadingText = 'Carregando...'}: ListFooterProps) {

    if (!isLoading) return null

    return (
        <View style={styles.container}>
            <Loading />
            <Text style={styles.loadingText}>
                {loadingText}
            </Text>
        </View>
    )
}
