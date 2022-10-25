import {useState} from "react"
import {Text, View, TouchableOpacity} from "react-native"
import {Entypo, AntDesign, Feather} from '@expo/vector-icons'

import {sample} from "../../utils/sample"

import {THEME} from "../../theme"
import {styles} from "./styles"

import {MovieHeader} from "../../components/MovieHeader"
import {Movies, IMovie} from "../../components/Movies"
import {Button} from "../../components/Button"
import {Background} from "../../components/Background"

import {MovieSummary} from "../MovieSummary"

export function Home() {
    const [bannerMovie, setBannerMovie] = useState<IMovie | null>(null)
    const [selectedMovie, setSelectedMovie] = useState<IMovie | null>(null)

    return (
        <Background>

            <MovieHeader bannerUrl={bannerMovie?.backdrop_path}>
                <Text style={styles.title}>{bannerMovie?.title}</Text>

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
                title='Em alta'
                url="movie/popular"
                onPressMovie={setSelectedMovie}
                onLoadMovies={movies => setBannerMovie(sample(movies))}
            />
            <Movies 
                title='Com estreia marcarda'
                url="movie/upcoming"
                onPressMovie={setSelectedMovie}
            />
            <Movies 
                title='Lançamentos'
                url="movie/now_playing"
                onPressMovie={setSelectedMovie}
            />
            <Movies 
                title='Bem avaliados pela crítica'
                url="movie/top_rated"
                onPressMovie={setSelectedMovie}
            />
            <Movies 
                title='Minha lista'
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
