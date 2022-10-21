import {useEffect, useState, useMemo} from "react"
import {Text, View, ScrollView, ImageBackground, TouchableOpacity} from "react-native"
import {LinearGradient} from "expo-linear-gradient"
import {Entypo, AntDesign, Feather} from '@expo/vector-icons'

import {THEMOVIEDB_BANNER_URL, THEMOVIEDB_CONFIG} from "../../config/themoviedb"
import api from "../../services/api"

import {THEME} from "../../theme"
import {styles} from "./styles"

import {Movies, IMovie} from "../../components/Movies"
import { Button } from "../../components/Button"

export function Home() {
    const [movies, setMovies] = useState<IMovie[]>([])
    const [loading, setLoading] = useState(true)

    const sampleRelease = useMemo(() => {
        return movies[5]
    }, [movies])

    useEffect(() => {
        const loadMovies = async () => {
            try {
                const response = await api.get("movie/popular", {
                    params: THEMOVIEDB_CONFIG,
                })

                const movies = response.data.results
                setMovies(movies)
            } catch (error) {
                console.log(error)
            }

            setLoading(false)
        }

        loadMovies()
    }, [])

    return (
        <ScrollView style={styles.container}>

            {/* HEADER */}
            <ImageBackground
                resizeMode="cover"
                style={styles.cover}
                source={{
                    uri: `${THEMOVIEDB_BANNER_URL}/${sampleRelease?.poster_path}`,
                }}
            >
                <LinearGradient
                    colors={THEME.COLORS.FOOTER}
                    style={styles.footer}
                >
                    <Text style={styles.title}>{sampleRelease?.title}</Text>

                    <View style={styles.controls}>

                        <TouchableOpacity style={styles.control}>
                            <AntDesign name='plus' color={THEME.COLORS.TEXT} size={20} />
                            <Text style={styles.controlText}>Minha lista</Text>
                        </TouchableOpacity>

                        <Button
                            startIcon={<Entypo name='controller-play' size={20} />}
                            titleStyle={styles.trailerButtonTitle}
                            style={styles.trailerButton}
                            title="Trailer"
                        />
                            
                        <TouchableOpacity style={styles.control}>
                            <Feather name='info' color={THEME.COLORS.TEXT} size={20} />
                            <Text style={styles.controlText}>Saiba mais</Text>
                        </TouchableOpacity>

                    </View>
                </LinearGradient>
            </ImageBackground>

            {/* MOVIE LIST */}
            <View style={styles.content}>
                <Text style={styles.subtitle}>Lançamentos</Text>

                <View>
                    <Movies data={movies} loading={loading} />
                </View>
            </View>

            {/* MOVIE LIST */}
            <View style={styles.content}>
                <Text style={styles.subtitle}>Em alta</Text>

                <View>
                    <Movies data={[...movies].reverse()} loading={loading} />
                </View>
            </View>

            {/* MOVIE LIST */}
            <View style={styles.content}>
                <Text style={styles.subtitle}>Filmes para a família</Text>

                <View>
                    <Movies data={movies} loading={loading} />
                </View>
            </View>

          </ScrollView>
    )
}
