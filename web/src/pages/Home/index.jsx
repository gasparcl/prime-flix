import { useState } from "react"

import { apiEndPoints } from "../../consts/apiEndPoints"

import FilmsSlider from "../../components/FilmsSlider"

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
                        <FilmsSlider
                            url={apiEndPoints.movies.nowPlaying}
                            title="Now Playing"
                            onClickAll={handleClickSeeAll}
                        />
                        <FilmsSlider
                            url={apiEndPoints.movies.upcoming}
                            title="Upcoming next"
                            onClickAll={handleClickSeeAll}
                        />
                        <FilmsSlider
                            url={apiEndPoints.movies.topRated}
                            title="Top Rated"
                            onClickAll={handleClickSeeAll}
                        />
                        <FilmsSlider
                            url={apiEndPoints.movies.popular}
                            title="Most Popular"
                            onClickAll={handleClickSeeAll}
                        />
                    </div>
                )}
                {viewSpecificSection && <h1>TESTE</h1>}
            </div>
        </>
    )
}
