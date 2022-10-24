import React from "react"

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

import PageTitle from "../PageTitle"
import SliderItem from "../SliderItem"

import "./styles.css"
import { Divider } from "@material-ui/core"

export default function Slider({ data, title }) {
    const [sliderRef] = useKeenSlider({
        loop: true,
        mode: "free",
        renderMode: "performance",
        slides: {
            perView: 4,
            spacing: 8,
        },
    })

    return (
        <>
            <PageTitle description={title} upperCase />
            <div ref={sliderRef} className="keen-slider my-4">
                {data.map((item) => {
                    return (
                        <div
                            key={item.id}
                            className="keen-slider__slide number-slide rounded-2"
                        >
                            <SliderItem itemData={item} />
                        </div>
                    )
                })}
            </div>
            <Divider className="mb-5 pb-1 bg-black bg-opacity-25 rounded-5" />
        </>
    )
}
