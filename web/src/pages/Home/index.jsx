import { useState } from "react"

import { apiEndPoints } from "../../consts/apiEndPoints"

import FilmsSlider from "../../components/FilmsSlider"
import FilmsGrid from "../../components/FilmsGrid"

// ╔╦╗╔═╗╔╦╗╔═╗╔╦╗╔═╗╔╦╗╔═╗
// ║║║║╣  ║ ╠═╣ ║║╠═╣ ║ ╠═╣
// ╩ ╩╚═╝ ╩ ╩ ╩═╩╝╩ ╩ ╩ ╩ ╩
//
// Note: You have to create your own api_key to fetch movies from API, to test the application - see more at: /.env.example
const FETCH_URL_NOW_PLAYING = apiEndPoints.movies.nowPlaying
const FETCH_URL_UPCOMING = apiEndPoints.movies.upcoming
const FETCH_URL_TOP_RATED = apiEndPoints.movies.topRated
const FETCH_URL_POPULAR = apiEndPoints.movies.popular

export default function Home() {
    // ╦ ╦╔═╗╔═╗╦╔═╔═╗
    // ╠═╣║ ║║ ║╠╩╗╚═╗
    // ╩ ╩╚═╝╚═╝╩ ╩╚═╝
    const [viewSpecificSection, setViewSpecificSection] = useState(false)
    const [current, setCurrent] = useState({})

    // ╦ ╦╔═╗╔╗╔╔╦╗╦  ╔═╗╦═╗╔═╗
    // ╠═╣╠═╣║║║ ║║║  ║╣ ╠╦╝╚═╗
    // ╩ ╩╩ ╩╝╚╝═╩╝╩═╝╚═╝╩╚═╚═╝
    const handleClickSeeAll = (current) => {
        setViewSpecificSection(true)
        setCurrent(current)
    }

    return (
        <>
            <div id="homepage">
                {!viewSpecificSection ? (
                    <div id="slider_section">
                        <FilmsSlider
                            url={FETCH_URL_NOW_PLAYING}
                            title="Now Playing"
                            onClickAll={() =>
                                handleClickSeeAll({
                                    url: FETCH_URL_NOW_PLAYING,
                                    title: "Now Playing",
                                })
                            }
                        />
                        <FilmsSlider
                            url={FETCH_URL_UPCOMING}
                            title="Upcoming next"
                            onClickAll={() =>
                                handleClickSeeAll({
                                    url: FETCH_URL_UPCOMING,
                                    title: "Upcoming next",
                                })
                            }
                        />
                        <FilmsSlider
                            url={FETCH_URL_TOP_RATED}
                            title="Top Rated"
                            onClickAll={() =>
                                handleClickSeeAll({
                                    url: FETCH_URL_TOP_RATED,
                                    title: "Top Rated",
                                })
                            }
                        />
                        <FilmsSlider
                            url={FETCH_URL_POPULAR}
                            title="Most Popular"
                            onClickAll={() =>
                                handleClickSeeAll({
                                    url: FETCH_URL_POPULAR,
                                    title: "Most Popular",
                                })
                            }
                        />
                    </div>
                ) : (
                    <FilmsGrid title={current.title} url={current.url} />
                )}
            </div>
        </>
    )
}
