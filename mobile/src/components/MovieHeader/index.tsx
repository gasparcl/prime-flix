import {ImageBackground, ViewProps} from "react-native"
import {LinearGradient} from "expo-linear-gradient"

import {THEMOVIEDB_BANNER_URL} from "../../config/themoviedb"
import {THEME} from "../../theme"

import {styles} from "./styles"

interface MovieHeaderProps extends ViewProps {
    bannerUrl?: string
}

export function MovieHeader({children, bannerUrl}: MovieHeaderProps) {
    return (
        <ImageBackground
            resizeMode="cover"
            style={styles.cover}
            source={{
                uri: `${THEMOVIEDB_BANNER_URL}/${bannerUrl}`,
            }}
        >
            <LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer}>
                {children}
            </LinearGradient>
        </ImageBackground>
    )
}
