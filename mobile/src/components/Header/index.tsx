import {View, Text, TouchableOpacity} from "react-native"
import {MaterialIcons} from "@expo/vector-icons"
import {useNavigation} from "@react-navigation/native"

import {styles} from "./styles"
import {THEME} from "../../theme"

interface HeaderProps {
    title: string
    showBackButton?: boolean
    showSearchButton?: boolean
}

export function Header({title, showBackButton, showSearchButton}: HeaderProps) {
    const navigation = useNavigation()

    const EmptyBoxSpace = () => <View style={styles.emptyBox} />

    return (
        <View style={styles.container}>
            {showBackButton ? (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <MaterialIcons
                        name="arrow-back-ios"
                        size={THEME.FONT_SIZE.LG}
                        color={THEME.COLORS.CAPTION_400}
                    />
                </TouchableOpacity>
            ) : (
                <EmptyBoxSpace />
            )}

            <Text style={styles.title}>{title}</Text>

            {showSearchButton ? (
                <TouchableOpacity
                    onPress={() =>
                        navigation.navigate("search", {
                            title: undefined,
                            url: undefined,
                        })
                    }
                >
                    <MaterialIcons
                        name="search"
                        size={THEME.FONT_SIZE.LG}
                        color={THEME.COLORS.CAPTION_300}
                    />
                </TouchableOpacity>
            ) : (
                <EmptyBoxSpace />
            )}
        </View>
    )
}
