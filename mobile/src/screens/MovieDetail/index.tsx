import {useState, useEffect} from "react"
import {View, Text, TouchableOpacity} from "react-native"
import {Entypo} from '@expo/vector-icons'
import {useRoute} from "@react-navigation/native"

import moment from 'moment'

import api from "../../services/api"
import {MovieDetailParams} from "../../@types/navigation"
import {THEMOVIEDB_CONFIG} from "../../config/themoviedb"

import {IMovie} from "../../components/Movies"
import {Background} from "../../components/Background"
import {MovieHeader} from "../../components/MovieHeader"
import {Loading} from "../../components/Loading"

import {styles} from "./styles"
import {THEME} from "../../theme"
import { convertMinutesToHourString } from "../../utils/convertMinutesToHourString"
import { Rating } from "../../components/Rating"

export function MovieDetail() {
    const route = useRoute()
    const {movieId} = route.params as MovieDetailParams

    const [movie, setMovie] = useState<IMovie | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const initializeMovie = async () => {
            try {
                const response = await api.get(`movie/${movieId}`, {
                    params: THEMOVIEDB_CONFIG,
                })

                const data = response.data
                // console.log(data)
                setMovie(data)
                
            } catch (error) {
                console.log(error)
            }

            setLoading(false)
        }

        initializeMovie()
    }, [movieId])

    return (
        <Background>
            <MovieHeader resizeMode="cover" bannerUrl={movie?.backdrop_path}>
                <TouchableOpacity style={styles.play}>
                    <Entypo
                        name="controller-play"
                        color={THEME.COLORS.CAPTION_900}
                        size={40}
                    />
                </TouchableOpacity>

                <View style={styles.header}>
                    <Text style={styles.headerTitle}>{movie?.title}</Text>

                    <Rating 
                        value={movie?.vote_average}
                        evaluationsCount={movie?.vote_count}
                    />

                    <View style={styles.headerMovieDetails}>
                        <Text style={styles.headerMovieDetail}>
                            {moment(movie?.release_date).format("YYYY")}
                        </Text>
                        <Text style={styles.headerMovieDetail}>
                            {convertMinutesToHourString(movie?.runtime)}
                        </Text>
                        <Text
                            numberOfLines={1}
                            style={[
                                styles.headerMovieDetail,
                                {borderRightWidth: 0},
                            ]}
                        >
                            {movie?.genres
                                ?.map((genre) => genre.name)
                                .join(", ")}
                        </Text>
                    </View>
                </View>
            </MovieHeader>

            <View style={styles.container}>
                {loading ? (
                    <Loading />
                ) : (
                    <View>
                        <Text style={styles.title}>Sinopse</Text>
                        <Text style={styles.storyline}>
                            {movie?.overview}
                        </Text>
                    </View>
                )}
            </View>
        </Background>
    )
}
