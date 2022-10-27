import { useState } from "react"

import { apiEndPoints } from "../../consts/apiEndPoints"

import FilmList from "../../components/FilmList"

// ╔╦╗╔═╗╔╦╗╔═╗╔╦╗╔═╗╔╦╗╔═╗
// ║║║║╣  ║ ╠═╣ ║║╠═╣ ║ ╠═╣
// ╩ ╩╚═╝ ╩ ╩ ╩═╩╝╩ ╩ ╩ ╩ ╩
//
// Note: You have to create your own api_key to fetch movies from API, to test the application - see more at: /.env.example

export default function Home() {
    // ╦ ╦╔═╗╔═╗╦╔═╔═╗
    // ╠═╣║ ║║ ║╠╩╗╚═╗
    // ╩ ╩╚═╝╚═╝╩ ╩╚═╝
    const [viewSpecificSection, setViewSpecificSection] = useState(false)

    // ╦ ╦╔═╗╔╗╔╔╦╗╦  ╔═╗╦═╗╔═╗
    // ╠═╣╠═╣║║║ ║║║  ║╣ ╠╦╝╚═╗
    // ╩ ╩╩ ╩╝╚╝═╩╝╩═╝╚═╝╩╚═╚═╝
    const handleClickSeeAll = () => {
        setViewSpecificSection(true)
    }

    return (
        <>
            <div id="homepage">
                {!viewSpecificSection && (
                    <div id="slider_section">
                        <FilmList
                            url={apiEndPoints.movies.nowPlaying}
                            title="Now Playing"
                            onClickAll={handleClickSeeAll}
                            isSlider
                        />
                        <FilmList
                            url={apiEndPoints.movies.upcoming}
                            title="Upcoming next"
                            onClickAll={handleClickSeeAll}
                            isSlider
                        />
                        <FilmList
                            url={apiEndPoints.movies.topRated}
                            title="Top Rated"
                            onClickAll={handleClickSeeAll}
                            isSlider
                        />
                        <FilmList
                            url={apiEndPoints.movies.popular}
                            title="Most Popular"
                            onClickAll={handleClickSeeAll}
                            isSlider
                        />
                    </div>
                )}
                {viewSpecificSection && <h1>TESTE</h1>}
            </div>
        </>
    )
}
