import {useState, useEffect, memo} from "react"
import {FlatList, View, ViewProps, Image, Text, Pressable, Animated, Easing, TouchableOpacity} from "react-native"
import {LinearGradient} from "expo-linear-gradient"
import {Entypo} from '@expo/vector-icons'
import Toast from 'react-native-toast-message'

import api from "../../services/api"
import {THEMOVIEDB_BANNER_URL} from "../../config/themoviedb"
import {THEMOVIEDB_CONFIG} from "../../config/themoviedb"

import {THEME} from "../../theme"
import {styles} from "./styles"

export interface Genre {
    id: number
    name: string
}
export interface IMovie {
    id: string
    title: string
    poster_path: string
    backdrop_path: string
    release_date: string
    vote_average: number
    vote_count: number
    overview: string

    runtime?: number,
    genres?: Genre[]
}

export interface MoviesProps extends ViewProps {
    title: string
    url?: string
    data?: IMovie[]
    showSeeAll?: boolean

    onPressMovie: (movie: IMovie) => void
    onLoadMovies?: (movies: IMovie[]) => void
}

const AnimatedLG = Animated.createAnimatedComponent(LinearGradient)

export function Movies({
    title,
    url,
    data: externalData,
    showSeeAll = true,
    onPressMovie,
    onLoadMovies,
    ...props
}: MoviesProps) {
    const [data, setData] = useState<IMovie[]>([])
    const [loading, setLoading] = useState(Boolean(url))

    const animatedValue = new Animated.Value(0)

    useEffect(() => {
        Animated.loop(
            Animated.timing(animatedValue, {
                toValue: 1,
                duration: 10000,
                easing: Easing.ease,
                useNativeDriver: true,
            })
        ).start()
    })

    const translateX = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [-112, 112],
    })

    useEffect(() => {
        const loadMovies = async () => {
            if (url) {
                try {
                    const response = await api.get(url, {
                        params: THEMOVIEDB_CONFIG,
                    })

                    const movies = response.data.results
                    setData(movies)

                    if (onLoadMovies) {
                        onLoadMovies(movies)
                    }
                } catch (error) {
                    Toast.show({
                        type: "error",
                        text1: "Opa!",
                        text2: "Não foi possível carregar os filmes.",
                    })
                } finally {
                    setLoading(false)
                }
            }
        }

        loadMovies()
    }, [url])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>{title}</Text>

                {showSeeAll && (
                    <TouchableOpacity style={styles.control}>
                        <Text style={styles.seeAll}>Ver todos</Text>
                        <Entypo
                            name="chevron-small-right"
                            color={THEME.COLORS.CAPTION_300}
                            size={24}
                        />
                    </TouchableOpacity>
                )}
            </View>

            {loading ? (
                <View style={styles.content}>
                    <FlatList
                        horizontal
                        data={[1, 2, 3, 4]}
                        renderItem={() => (
                            <AnimatedLG
                                style={[
                                    styles.cover,
                                    {transform: [{translateX}]},
                                ]}
                                colors={[
                                    THEME.COLORS.BACKGROUND_800,
                                    THEME.COLORS.BACKGROUND_700,
                                ]}
                                start={{x: 0, y: 0}}
                                end={{x: 1, y: 0}}
                            />
                        )}
                    />
                </View>
            ) : (
                <View style={styles.content} {...props}>
                    <FlatList
                        horizontal
                        data={externalData || data}
                        keyExtractor={(item) => item.id}
                        renderItem={({item}) => (
                            <Pressable onPress={() => onPressMovie(item)}>
                                <Image
                                    resizeMode="cover"
                                    style={styles.cover}
                                    source={{
                                        uri: `${THEMOVIEDB_BANNER_URL}/${item.poster_path}`,
                                    }}
                                />
                            </Pressable>
                        )}
                    />
                </View>
            )}
        </View>
    )
}

export default memo(Movies)
