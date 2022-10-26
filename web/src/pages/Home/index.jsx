import { useLayoutEffect, useState } from "react"

import api from "../../services/api"
import { apiEndPoints } from "../../consts/apiEndPoints"
import { FETCH_PARAMS } from "../../consts/apiFetch"

import toast from "react-hot-toast"

import Loader from "../../components/Loader"
import Slider from "../../components/Slider"

// ╔╦╗╔═╗╔╦╗╔═╗╔╦╗╔═╗╔╦╗╔═╗
// ║║║║╣  ║ ╠═╣ ║║╠═╣ ║ ╠═╣
// ╩ ╩╚═╝ ╩ ╩ ╩═╩╝╩ ╩ ╩ ╩ ╩
//
// Note: You have to create your api_key to fetch movies from API, to test the application - see more here: src/environments/development/development.js

export default function Home() {
    // ╦ ╦╔═╗╔═╗╦╔═╔═╗
    // ╠═╣║ ║║ ║╠╩╗╚═╗
    // ╩ ╩╚═╝╚═╝╩ ╩╚═╝
    const [popular, setPopular] = useState([])
    const [nowPlaying, setNowPlaying] = useState([])
    const [topRated, setTopRated] = useState([])
    const [upcoming, setUpcoming] = useState([])
    const [loading, setLoading] = useState(true)

    useLayoutEffect(() => {
        async function loadFilms() {
            try {
                const responseNowPlaying = await api.get(
                    apiEndPoints.movies.nowPlaying,
                    {
                        params: FETCH_PARAMS,
                    },
                )
                const responsePopular = await api.get(
                    apiEndPoints.movies.popular,
                    {
                        params: FETCH_PARAMS,
                    },
                )
                const responseTopRated = await api.get(
                    apiEndPoints.movies.topRated,
                    {
                        params: FETCH_PARAMS,
                    },
                )
                const responseUpcoming = await api.get(
                    apiEndPoints.movies.upcoming,
                    {
                        params: FETCH_PARAMS,
                    },
                )
                const nowPlayingList = responseNowPlaying.data.results
                const popularList = responsePopular.data.results
                const topRatedList = responseTopRated.data.results
                const upcomingList = responseUpcoming.data.results

                // Setting Data
                setNowPlaying(nowPlayingList)
                setPopular(popularList)
                setTopRated(topRatedList)
                setUpcoming(upcomingList)
            } catch (error) {
                toast.error(
                    `There's a problem loading films...
                    Code: ${error.code}\n
                    "Message: ${error.message}"`,
                    {
                        duration: 6000,
                    },
                )
            }
            setLoading(false)
        }
        loadFilms()
    }, [])

    if (loading) return <Loader />
    else {
        return (
            <>
                <div id="homepage">
                    <div id="slider_section">
                        <Slider data={nowPlaying} title="Now Playing" />
                        <Slider data={upcoming} title="Upcoming next" />
                        <Slider data={topRated} title="Top Rated" />
                        <Slider data={popular} title="Most Popular" />
                    </div>
                </div>
            </>
        )
    }
}
