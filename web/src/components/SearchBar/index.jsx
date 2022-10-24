import { useState, useEffect } from "react"

import api from '../../services/api'
import {apiEndPoints} from '../../consts/apiEndPoints'

import { TextField } from "@material-ui/core"


export default function SearchBar() {
    // ╦ ╦╔═╗╔═╗╦╔═╔═╗
    // ╠═╣║ ║║ ║╠╩╗╚═╗
    // ╩ ╩╚═╝╚═╝╩ ╩╚═╝
    const [search, setSearch] = useState("")
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        let timeOut = undefined
        const value = search

        if (value) {
            setLoading(true)

            timeOut = setTimeout(() => {
                api.get(apiEndPoints.)
            })
        }
    }, [search])

    // ╦ ╦╔═╗╔╗╔╔╦╗╦  ╔═╗╦═╗╔═╗
    // ╠═╣╠═╣║║║ ║║║  ║╣ ╠╦╝╚═╗
    // ╩ ╩╩ ╩╝╚╝═╩╝╩═╝╚═╝╩╚═╚═╝
    const handleChange = async (e) => {
        const searchValue = e.target.value
        setSearch(searchValue)
    }

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div>
                <TextField
                    id="outlined-search"
                    label="Find your movies here..."
                    type="search"
                    variant="outlined"
                    value={search}
                    onChange={handleChange}
                />
            </div>
        </form>
    )
}
