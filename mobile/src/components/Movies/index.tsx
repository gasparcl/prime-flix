import {useState, useEffect, memo} from "react"
import {FlatList, View, ViewProps, Image,Text, Pressable} from "react-native"

import {THEMOVIEDB_BANNER_URL} from "../../config/themoviedb"
import {THEMOVIEDB_CONFIG} from "../../config/themoviedb"
import api from "../../services/api"

import {styles} from "./styles"

export interface IMovie {
    id: string
    title: string
    poster_path: string
    backdrop_path: string
    release_date: string
    vote_average: number
    vote_count: string
    overview: string
}

export interface MoviesProps extends ViewProps {
    title: string
    url?: string
    initialData?: IMovie[]

    onPressMovie: (movie: IMovie) => void
    onLoadMovies?: (movies: IMovie[]) => void
}

export function Movies({title, url, initialData = [], onPressMovie, onLoadMovies, ...props}: MoviesProps) {

    const [data, setData] = useState<IMovie[]>(initialData)
    const [_, setLoading] = useState(true)

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
                }
            }

            setLoading(false)
        }

        loadMovies()

    }, [url])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>

            <View style={styles.content} {...props}>
                <FlatList
                    horizontal
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => (
                        <Pressable
                            onPress={() => onPressMovie(item)}
                        >
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

        </View>
    )
}

export default memo(Movies)
