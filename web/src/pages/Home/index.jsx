import { useState } from "react"

import { useMediaQuery, useTheme } from "@material-ui/core"
import { apiEndPoints } from "../../consts/apiEndPoints"

import FilmsSlider from "../../components/FilmsSlider"
import DefaultContainer from "../../components/DefaultContainer"
import { BackButton, HomeDiv, HomeGrid } from "./styles"

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
    const theme = useTheme()
    const IS_MOBILE = useMediaQuery(theme.breakpoints.down("xs"))

    // ╦ ╦╔═╗╔╗╔╔╦╗╦  ╔═╗╦═╗╔═╗
    // ╠═╣╠═╣║║║ ║║║  ║╣ ╠╦╝╚═╗
    // ╩ ╩╩ ╩╝╚╝═╩╝╩═╝╚═╝╩╚═╚═╝
    const handleClickSeeAll = (current) => {
        setViewSpecificSection(true)
        setCurrent(current)
    }

    const handleSetDefaultSliderView = () => {
        setViewSpecificSection(false)
        setCurrent({})
    }

    return (
        <DefaultContainer>
            <HomeDiv id="homepage">
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
                    <>
                        <BackButton
                            isBackButton
                            onClick={handleSetDefaultSliderView}
                            className={IS_MOBILE ? "mobileButton" : "absButton"}
                        >
                            Back
                        </BackButton>
                        <HomeGrid
                            title={current.title}
                            url={current.url}
                            showRegisters
                        />
                    </>
                )}
            </HomeDiv>
        </DefaultContainer>
    )
}
