import {useState, useCallback} from "react"
import {View, Alert, Text} from "react-native"
import {MaterialIcons} from '@expo/vector-icons'
import YoutubePlayer from "react-native-youtube-iframe"

import moment from "moment"

import {styles} from "./styles"
import { THEME } from "../../theme"

export interface VideoData {
    id: string
    iso_639_1: string
    iso_3166_1: string
    name: string
    key: string
    site: string
    size: number
    type: string
    official: boolean
    published_at: string
}

interface VideoProps {
    data: VideoData
}

export function Video({data}: VideoProps) {
    const [playing, setPlaying] = useState(false)

    const onStateChange = useCallback((state: string) => {
        if (state === "ended") {
            setPlaying(false)
            Alert.alert("video has finished playing!")
        }
    }, [])

    const formattedPublishedAt = moment(data.published_at).locale('pt-br').format('DD [de] MMMM [de] YYYY')

    return (
        <View style={styles.container}>
            <View style={styles.video}>
                <YoutubePlayer
                    height={200}
                    play={playing}
                    videoId={data.key}
                    onChangeState={onStateChange}
                />
            </View>

            <View style={styles.info}>
                <View style={{flex: 1}}>
                    <Text style={styles.title}>{data.name}</Text>
                    <Text style={styles.subtitle}>{formattedPublishedAt}</Text>
                </View>
                
                <View>
                    <MaterialIcons 
                        name='verified'
                        color={data.official ? THEME.COLORS.SUCCESS : THEME.COLORS.CAPTION_500}
                        size={THEME.FONT_SIZE.LG}
                    />
                </View>
            </View>
        </View>
    )
}
