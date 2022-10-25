import {
    Modal,
    ModalProps,
    View,
    Pressable,
    Text,
    Image,
    TouchableOpacity,
} from "react-native"
import {Ionicons, AntDesign} from "@expo/vector-icons"
import moment from "moment"

import {THEMOVIEDB_BANNER_URL} from "../../config/themoviedb"
import {IMovie} from "../../components/Movies"

import {styles} from "./styles"
import {THEME} from "../../theme"

interface MovieSummaryProps extends ModalProps {
    current: IMovie | null
}

export function MovieSummary({current, ...props}: MovieSummaryProps) {
    console.log(current)

    return (
        <Modal animationType="slide" transparent {...props}>
            <View style={styles.screen}>
                <Pressable onPress={props.onRequestClose} style={{flex: 1}} />

                <View style={styles.container}>
                    <View style={styles.content}>
                        <Image
                            resizeMode="cover"
                            style={styles.movieBanner}
                            source={{
                                uri: `${THEMOVIEDB_BANNER_URL}/${current?.poster_path}`,
                            }}
                        />

                        <View style={styles.movieInnerContent}>
                            <Text style={styles.movieTitle} numberOfLines={1}>
                                {current?.title}
                            </Text>

                            <View style={styles.movieDetail}>
                                <Text style={styles.movieTextSecondary}>
                                    {moment(current?.release_date).format(
                                        "YYYY"
                                    )}
                                </Text>
                                <Text style={styles.movieVoteAverage}>
                                    {current?.vote_average}
                                </Text>
                                <Text style={styles.movieTextSecondary}>
                                    {current?.vote_count} Avaliações
                                </Text>
                            </View>

                            <Text style={styles.movieSummary} numberOfLines={5}>
                                {current?.overview}
                            </Text>
                        </View>
                    </View>

                    <View style={styles.controls}>
                        <TouchableOpacity style={styles.control}>
                            <View
                                style={[
                                    styles.controlIcon,
                                    styles.controlIconActive,
                                ]}
                            >
                                <Ionicons
                                    name="play"
                                    color={THEME.COLORS.CAPTION_900}
                                    size={THEME.FONT_SIZE.LG}
                                />
                            </View>
                            <Text style={styles.controlText}>Trailer</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.control}>
                            <View style={styles.controlIcon}>
                                <AntDesign
                                    name="plus"
                                    color={THEME.COLORS.TEXT}
                                    size={THEME.FONT_SIZE.LG}
                                />
                            </View>
                            <Text style={styles.controlText}>Minha lista</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.control}>
                            <View style={styles.controlIcon}>
                                <AntDesign
                                    name="like1"
                                    color={THEME.COLORS.TEXT}
                                    size={THEME.FONT_SIZE.LG}
                                />
                            </View>
                            <Text style={styles.controlText}>Críticas</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}
