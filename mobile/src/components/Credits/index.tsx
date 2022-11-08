import {useState, useEffect} from "react"
import {FlatList, View, Text, Image} from "react-native"
import Toast from "react-native-toast-message"

import api from "../../services/api"
import {THEMOVIEDB_CAST_PROFILE_URL, THEMOVIEDB_CONFIG} from "../../config/themoviedb"

import {styles} from "./styles"

interface Actor {
    adult: boolean
    gender: number
    id: number
    cast_id: number
    credit_id: string
    order: number
    known_for_department: string
    original_name: string
    name: string
    character: string
    popularity: number
    profile_path: string
}

interface Producer {
    adult: boolean
    gender: number
    id: number
    credit_id: string

    known_for_department: string
    original_name: string
    name: string

    popularity: number
    profile_path: string
    department: string
    job: string
}

interface ICredits {
    id: number
    cast: Actor[]
    crew: Producer[]
}

interface CreditsProps {
    movieId: string
}

export function Credits({movieId}: CreditsProps) {
    const [credits, setCredits] = useState<ICredits>({} as ICredits)
    // const [_, setIsLoading] = useState(true)

    async function fetchCredits() {
        try {

            const response = await api.get(`movie/${movieId}/credits`, {
                params: THEMOVIEDB_CONFIG,
            })

            setCredits(response.data)
            // setIsLoading(true)
            
        } catch (error) {

            Toast.show({
                type: "error",
                text1: "Opa!",
                text2: "Não foi poosível carregar o elenco do filme, tente novamente mais tarde.",
            })

            throw error
            
        } finally {
            // setIsLoading(false)
        }

    }

    useEffect(() => {
        fetchCredits()
    }, [movieId])

    return (
        <View style={styles.container}>

            <View style={styles.listContainer}>
                <Text style={styles.title}>
                    Elenco
                </Text>

                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={credits.cast}
                    keyExtractor={item => item.id + ''}
                    renderItem={({item}) => (
                        <View style={styles.listItem}>
                            <Image
                                resizeMode="cover"
                                style={styles.avatar}
                                source={{
                                    uri: THEMOVIEDB_CAST_PROFILE_URL + item.profile_path
                                }}
                            />

                            <Text numberOfLines={1} style={styles.character}>
                                {item.character}
                            </Text>
                            <Text numberOfLines={1} style={styles.name}>
                                {item.original_name}
                            </Text>
                        </View>
                    )}
                />
            </View>
        </View>
    )
}
