import {ImageBackground, ImageBackgroundProps, TouchableOpacity, ViewProps} from "react-native"
import {LinearGradient} from "expo-linear-gradient"
import {MaterialIcons} from '@expo/vector-icons'

import {THEMOVIEDB_BANNER_URL} from "../../config/themoviedb"
import {THEME} from "../../theme"

import {useIsFavorite} from "../../hooks/useIsFavorite"

import {styles} from "./styles"

interface MovieHeaderProps {
    bannerUrl?: string
    resizeMode?: ImageBackgroundProps['resizeMode'],
    children?: React.ReactNode

    movieId?: string
    onPressFavorite?: (isFavoriteMovie: boolean) => void
}

export function MovieHeader({
    children,
    bannerUrl,
    resizeMode = "cover",
    movieId,
    onPressFavorite,
}: MovieHeaderProps) {

    const isFavorite = useIsFavorite()

    const renderFavoriteButton = () => {
        const isFavoriteMovie = isFavorite("movies", movieId as string)

        if (!movieId) return null

        return (
            <TouchableOpacity
                onPress={() => onPressFavorite ? onPressFavorite(isFavoriteMovie) : undefined}
                style={styles.favoriteIconContainer}
            >
                {isFavorite("movies", movieId) ? (
                    <MaterialIcons
                        size={THEME.FONT_SIZE.XL}
                        color={THEME.COLORS.PRIMARY}
                        name="favorite"
                    />
                ) : (
                    <MaterialIcons
                        size={THEME.FONT_SIZE.XL}
                        color={THEME.COLORS.DISABLED}
                        name="favorite-border"
                    />
                )}
            </TouchableOpacity>
        )
    }

    return (
        <ImageBackground
            resizeMode={resizeMode}
            style={styles.cover}
            source={{
                uri: `${THEMOVIEDB_BANNER_URL}/${bannerUrl}`,
            }}
        >
            <LinearGradient
                colors={THEME.COLORS.FOOTER}
                style={styles.container}
            >
                {children}
            </LinearGradient>

            {renderFavoriteButton()}
        </ImageBackground>
    )
}
