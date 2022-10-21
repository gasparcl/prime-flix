import {FlatList, View, ViewProps, ImageBackground,Text} from "react-native"
import {THEMOVIEDB_BANNER_URL} from "../../config/themoviedb"

import {styles} from "./styles"

export interface IMovie {
    id: string
    title: string
    poster_path: string
}

export interface MoviesProps extends ViewProps {
    title: string
    data: IMovie[]
    loading?: boolean
}

export function Movies({title, data, loading, ...props}: MoviesProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>

            <View style={styles.content} {...props}>
                <FlatList
                    horizontal
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => (
                        <ImageBackground
                            resizeMode="cover"
                            style={styles.cover}
                            source={{
                                uri: `${THEMOVIEDB_BANNER_URL}/${item.poster_path}`,
                            }}
                        />
                    )}
                />
            </View>

        </View>
    )
}
