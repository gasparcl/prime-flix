import {useState, useEffect} from "react"
import {View, Image} from "react-native"
import {Shadow} from "react-native-shadow-2"

import {THEMOVIEDB_BANNER_URL} from "../../config/themoviedb"
import {useFavoriteMovies} from "../../hooks/useFavoriteMovies"

import {Background} from "../../components/Background"
import {FavoriteMovies} from "../../components/FavoriteMovies"
import {Header} from "../../components/Header"
import {MovieHeader} from "../../components/MovieHeader"
import {IMovie} from "../../components/Movies"
import {WatchProviders} from "../../components/WatchProviders"

import {styles} from "./styles"

export function Favorites() {
    const {data} = useFavoriteMovies()
    const [selectedMovie, setSelectedMovie] = useState<IMovie>({} as IMovie)

    useEffect(() => {
        if (data.length > 0) {
            setSelectedMovie(data[0])
        }
    }, [data])

    return (
        <Background>
            {selectedMovie.id ? (
                <MovieHeader movie={selectedMovie}>
                    <View style={styles.header}>
                        <Shadow>
                            <Image
                                resizeMode="cover"
                                style={styles.poster}
                                source={{
                                    uri: `${THEMOVIEDB_BANNER_URL}/${selectedMovie.poster_path}`,
                                }}
                            />
                        </Shadow>

                        <WatchProviders 
                            movieId={selectedMovie.id}
                        />
                    </View>
                </MovieHeader>
            ) : (
                <Header title="Meus favoritos" />
            )}

            <View style={styles.container}>
                <FavoriteMovies title=" " onPressMovie={setSelectedMovie} />
            </View>
        </Background>
    )
}
