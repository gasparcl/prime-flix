import {useEffect, useState, useMemo} from "react"
import {Text, View, ScrollView, TouchableOpacity} from "react-native"
import {Entypo, AntDesign, Feather} from '@expo/vector-icons'

import {THEMOVIEDB_CONFIG} from "../../config/themoviedb"
import api from "../../services/api"

import {THEME} from "../../theme"
import {styles} from "./styles"

import {MovieHeader} from "../../components/MovieHeader"
import {Movies, IMovie} from "../../components/Movies"
import {Button} from "../../components/Button"

import {MovieSummary} from "../MovieSummary"

export function Home() {
    const [movies, setMovies] = useState<IMovie[]>([])
    const [loading, setLoading] = useState(true)
    const [selectedMovie, setSelectedMovie] = useState<IMovie | null>(null)

    const sampleRelease = useMemo(() => {
        return movies[6]
    }, [movies])

    useEffect(() => {
        const loadMovies = async () => {
            try {
                const response = await api.get("movie/upcoming", {
                    params: THEMOVIEDB_CONFIG,
                })

                const movies = response.data.results
                setMovies(movies)
                
            } catch (error) {
            }

            setLoading(false)
        }

        loadMovies()
    }, [])

    return (
        <ScrollView style={styles.container}>

            <MovieHeader bannerUrl={sampleRelease?.poster_path}>
                <Text style={styles.title}>{sampleRelease?.title}</Text>

                <View style={styles.controls}>
                    <TouchableOpacity style={styles.control}>
                        <AntDesign
                            name="plus"
                            color={THEME.COLORS.TEXT}
                            size={20}
                        />
                        <Text style={styles.controlText}>Minha lista</Text>
                    </TouchableOpacity>

                    <Button
                        startIcon={<Entypo name="controller-play" size={20} />}
                        titleStyle={styles.controlButtonTitle}
                        style={styles.controlButton}
                        title="Trailer"
                    />

                    <TouchableOpacity style={styles.control}>
                        <Feather
                            name="info"
                            color={THEME.COLORS.TEXT}
                            size={20}
                        />
                        <Text style={styles.controlText}>Saiba mais</Text>
                    </TouchableOpacity>
                </View>
            </MovieHeader>

            <Movies 
                title='Lançamentos'
                data={movies}
                loading={loading}
                onPressMovie={setSelectedMovie}
            />
            <Movies 
                title='Em alta'
                data={[...movies].reverse()}
                loading={loading}
                onPressMovie={setSelectedMovie}
            />
            <Movies 
                title='Minha lista'
                data={movies.slice(0, 2)}
                loading={loading}
                onPressMovie={setSelectedMovie}
            />

            <MovieSummary 
                current={selectedMovie}
                visible={!!selectedMovie}
                onRequestClose={() => setSelectedMovie(null)}
            />
        </ScrollView>
    )
}
