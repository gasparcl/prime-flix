import {useState} from "react"
import {Text, View, TouchableOpacity} from "react-native"
import {Entypo, AntDesign, Feather} from '@expo/vector-icons'
import {useNavigation} from "@react-navigation/native"

import {sample} from "../../utils/sample"

import {THEME} from "../../theme"
import {styles} from "./styles"

import {MovieHeader} from "../../components/MovieHeader"
import {Button} from "../../components/Button"
import {Background} from "../../components/Background"
import Movies, {IMovie} from "../../components/Movies"

import {MovieSummary} from "../MovieSummary"

export function Home() {
    const [bannerMovie, setBannerMovie] = useState<IMovie | null>(null)
    const [selectedMovie, setSelectedMovie] = useState<IMovie | null>(null)

    const { navigate } = useNavigation()

    return (
        <Background>
            <MovieHeader bannerUrl={bannerMovie?.poster_path}>
                <Text style={styles.title}>{bannerMovie?.title}</Text>

                <View style={styles.controls}>
                    <TouchableOpacity
                        onPress={() => navigate("favorites")}
                        style={styles.control}
                    >
                        <AntDesign
                            name="plus"
                            color={THEME.COLORS.TEXT}
                            size={20}
                        />
                        <Text style={styles.controlText}>Minha lista</Text>
                    </TouchableOpacity>

                    <Button
                        title="Trailer"
                        disabled={!bannerMovie}
                        startIcon={<Entypo name="controller-play" size={20} />}
                        titleStyle={styles.controlButtonTitle}
                        style={styles.controlButton}
                        onPress={() =>
                            navigate("movieDetail", {
                                movieId: bannerMovie?.id || "",
                                title: bannerMovie?.title || "",
                                isTrailer: true
                            })
                        }
                    />

                    <TouchableOpacity
                        style={styles.control}
                        onPress={() =>
                            navigate("movieDetail", {
                                movieId: bannerMovie?.id || "",
                                title: bannerMovie?.title || "",
                            })
                        }
                    >
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
                title="Em alta"
                url="movie/popular"
                onPressMovie={setSelectedMovie}
                onLoadMovies={(movies) => setBannerMovie(sample(movies))}
            />
            <Movies
                title="Agora nos cinemas"
                url="movie/upcoming"
                onPressMovie={setSelectedMovie}
            />
            <Movies
                title="Lançamentos"
                url="movie/now_playing"
                onPressMovie={setSelectedMovie}
            />
            <Movies
                title="Aclamados pela crítica"
                url="movie/top_rated"
                onPressMovie={setSelectedMovie}
            />
            <Movies
                title="Minha lista"
                onPressMovie={setSelectedMovie}
                initialData={[]}
            />

            <MovieSummary
                current={selectedMovie}
                visible={!!selectedMovie}
                onRequestClose={() => setSelectedMovie(null)}
            />
        </Background>
    )
}
