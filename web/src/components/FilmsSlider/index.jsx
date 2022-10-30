import { useLayoutEffect, useState } from "react"
import PropTypes from "prop-types"

import { useKeenSlider } from "keen-slider/react"
import toast from "react-hot-toast"
import "keen-slider/keen-slider.min.css"
import { Divider } from "@material-ui/core"

import api from "../../services/api"
import { FETCH_PARAMS } from "../../consts/apiFetch"

import FilmItem from "../FilmItem"
import PageTitle from "../PageTitle"
import Loader from "../Loader"

import "./styles.css"

export default function FilmsSlider({ url, title, onClickAll, ...props }) {
    // ╦ ╦╔═╗╔═╗╦╔═╔═╗
    // ╠═╣║ ║║ ║╠╩╗╚═╗
    // ╩ ╩╚═╝╚═╝╩ ╩╚═╝
    const [sliderRef] = useKeenSlider({
        loop: true,
        mode: "free",
        renderMode: "performance",
        slides: {
            perView: 4,
            spacing: 8,
        },
    })

    const [loading, setLoading] = useState(true)
    const [films, setFilms] = useState([])

    useLayoutEffect(() => {
        async function loadFilms() {
            try {
                const response = await api.get(url, {
                    params: FETCH_PARAMS,
                })
                const filmsList = response.data.results

                // Setting Data
                setFilms(filmsList)
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
    }, [url])

    if (loading) return <Loader />

    return (
        <>
            <PageTitle
                description={title}
                upperCase
                isLink
                onClickAll={onClickAll}
                {...props}
            />
            <div ref={sliderRef} className="keen-slider my-4">
                {films.map((film) => {
                    return (
                        <div
                            key={film.id}
                            className="keen-slider__slide number-slide rounded-2"
                        >
                            <FilmItem filmData={film} />
                        </div>
                    )
                })}
            </div>
            <Divider
                className="mb-5 pb-1 bg-black bg-opacity-25 rounded-5"
                {...props}
            />
        </>
    )
}

FilmsSlider.propTypes = {
    title: PropTypes.string,
    url: PropTypes.string,
    onClickAll: PropTypes.func,
}

FilmsSlider.defaultProps = {
    title: "",
    url: "",
    onClickAll: undefined,
}
