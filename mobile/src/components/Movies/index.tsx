import {FlatList, View, ViewProps, Image,Text, Pressable} from "react-native"
import {THEMOVIEDB_BANNER_URL} from "../../config/themoviedb"

import {styles} from "./styles"

export interface IMovie {
    id: string
    title: string
    poster_path: string
    backdrop_path: string
    release_date: string
    vote_average: string
    vote_count: string
    overview: string
}

export interface MoviesProps extends ViewProps {
    title: string
    data: IMovie[]
    loading?: boolean
    onPressMovie: (movie: IMovie) => void
}

export function Movies({title, data, loading, onPressMovie, ...props}: MoviesProps) {
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
