import {ImageBackground, ImageBackgroundProps, ViewProps} from "react-native"
import {LinearGradient} from "expo-linear-gradient"

import {THEMOVIEDB_BANNER_URL} from "../../config/themoviedb"
import {THEME} from "../../theme"

import {styles} from "./styles"

interface MovieHeaderProps extends ViewProps {
    bannerUrl?: string
    resizeMode?: ImageBackgroundProps['resizeMode']
}

export function MovieHeader({children, bannerUrl, resizeMode = 'cover'}: MovieHeaderProps) {
    return (
        <ImageBackground
            resizeMode={resizeMode}
            style={styles.cover}
            source={{
                uri: `${THEMOVIEDB_BANNER_URL}/${bannerUrl}`,
            }}
        >
            <LinearGradient colors={THEME.COLORS.FOOTER} style={styles.container}>
                {children}
            </LinearGradient>
        </ImageBackground>
    )
}
