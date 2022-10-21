import React from "react"

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

import SliderItem from "../SliderItem"

import "./styles.css"

export default function Slider({ data }) {
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
    )
}
