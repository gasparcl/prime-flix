import {View, Text, Image, FlatList} from "react-native"

import {THEMOVIEDB_PROVIDERS_URL} from "../../config/themoviedb"
import {Provider} from "../WatchProviders"

import {styles} from "./styles"

interface WatchProviderProps {
    title: string
    data?: Provider[]
}

export function WatchProvider({title, data = []}: WatchProviderProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false} 
                data={data}
                keyExtractor={item => item.provider_id + ''}
                renderItem={({item}) => (
                    <View style={styles.provider}>
                        <Image 
                            style={styles.logo}
                            source={{
                                uri: THEMOVIEDB_PROVIDERS_URL + item.logo_path
                            }}
                        />
                    </View>
                )}
            />
        </View>
    )
}
