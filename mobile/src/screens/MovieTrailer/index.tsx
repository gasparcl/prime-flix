import {useState, useEffect} from "react"
import {View, FlatList} from "react-native"
import {useRoute} from "@react-navigation/native"
import Toast from "react-native-toast-message"

import api from "../../services/api"
import {MovieDetailParams} from "../../@types/navigation"
import {THEMOVIEDB_CONFIG} from "../../config/themoviedb"

import {Background} from "../../components/Background"
import {LoaderContainer} from "../../components/LoaderContainer"
import {Header} from "../../components/Header"
import {Video, VideoData} from "../../components/Video"

import {styles} from "./styles"

export function MovieTrailer() {
    const [videos, setVideos] = useState<VideoData[]>([])
    const [loading, setLoading] = useState(true)

    const route = useRoute()
    const {movieId, title} = route.params as MovieDetailParams

    useEffect(() => {
        const initializeVideos = async () => {
            try {
                const response = await api.get(`movie/${movieId}/videos`, {
                    params: THEMOVIEDB_CONFIG,
                })

                const data = response.data.results
                setVideos(data)

                if (data.length === 0) {
                    Toast.show({
                        type: "error",
                        text1: "Opa!",
                        text2: "Esse filme não possui videos cadastrados",
                    })
                }

            } catch (error) {
                Toast.show({
                    type: "error",
                    text1: "Opa!",
                    text2: "Não foi possível buscar os videos",
                })
            } finally {
                setLoading(false)
            }
        }

        initializeVideos()
    }, [movieId])

    return (
        <Background 
            component={View}
            style={styles.container}
        >
            <Header 
                title={title}
            />
            
            <LoaderContainer isLoading={loading} style={styles.content}>
                <FlatList 
                    data={videos}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => <Video data={item} />}
                />
            </LoaderContainer>

        </Background>
    )
}
