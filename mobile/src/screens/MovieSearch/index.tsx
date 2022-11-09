import {useState, useEffect} from "react"
import {FlatList, View} from "react-native"
import {useNavigation} from "@react-navigation/native"
import Toast from "react-native-toast-message"

import api from "../../services/api"
import {THEMOVIEDB_CONFIG} from "../../config/themoviedb"
import {IMovie} from "../../components/Movies"
import {uniqueArray} from "../../utils/uniqueArray"

import {Background} from "../../components/Background"
import {Input} from "../../components/Input"
import {MovieCard} from "../../components/MovieCard"
import {ItemSeparator} from "../../components/ItemSeparator"
import {EmptyMovieList} from "../../components/EmptyMovieList"
import {LoaderContainer} from "../../components/LoaderContainer"

import {styles} from "./styles"
import {SafeAreaView} from "react-native-safe-area-context"

const SEARCH_DELAY_TIME = 1000 / 2 // 0.5 seconds

interface Result {
    page: number
    total_pages: number
    total_results: number
}

export function MovieSearch() {
    const [result, setResult] = useState<Result>({} as Result)
    const [movies, setMovies] = useState<IMovie[]>([])

    const [movieTitle, setMovieTitle] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const {navigate} = useNavigation()

    async function fetchMovies(page: number = 1) {
        try {
            setIsLoading(true)

            const response = await api.get("search/movie", {
                params: {
                    ...THEMOVIEDB_CONFIG,
                    query: movieTitle,
                    include_adult: false,
                    page,
                },
            })

            const {results, ...newResult} = response.data

            setResult(newResult)
            setMovies((previousResults) => {
                const newResults = previousResults.concat(results)
                return uniqueArray(newResults)
            })
        } catch (error) {
            Toast.show({
                type: "error",
                text1: "Opa!",
                text2: "Não foi possível buscar os filmes, tente novamente mais tarde.",
            })

            throw error
        } finally {
            setIsLoading(false)
        }
    }

    async function loadMoreData() {
        const newPage = result.page + 1

        if (newPage <= result.total_pages) {
            await fetchMovies(newPage)
        }
    }

    useEffect(() => {
        let timeOut: NodeJS.Timeout | undefined = undefined
        setMovies([])

        if (movieTitle.trim()) {
            timeOut = setTimeout(fetchMovies, SEARCH_DELAY_TIME)
        }

        return () => clearTimeout(timeOut)
    }, [movieTitle])


    const isLoadingContainer = isLoading && movies.length === 0

    return (
        <Background component={View}>

            <SafeAreaView style={styles.container}>
                <View style={styles.searchContainer}>
                    <Input
                        placeholder="Digite o nome do filme que deseja buscar."
                        value={movieTitle}
                        onChangeText={setMovieTitle}
                    />
                </View>

                <LoaderContainer
                    style={isLoadingContainer ? styles.loaderContainer : {}}
                    isLoading={isLoadingContainer}
                >
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={styles.listContainer}
                        data={movies}
                        keyExtractor={(item) => item.id}
                        renderItem={({item}) => 
                            <MovieCard 
                                data={item} 
                                onPress={() => navigate('movieDetail', {
                                    movieId: item.id,
                                    title: item.title,
                                })}
                            />
                        }
                        onEndReachedThreshold={0.1}
                        onEndReached={loadMoreData}
                        ItemSeparatorComponent={ItemSeparator}
                        ListEmptyComponent={() => (
                            <EmptyMovieList query={movieTitle} />
                        )}
                    />
                </LoaderContainer>
            </SafeAreaView>

        </Background>
    )
}
