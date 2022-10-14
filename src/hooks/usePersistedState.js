import { useState, useEffect } from "react"

export function usePersistedState(key, initialState) {
    const [state, setState] = useState(() => {
        const storageValue = localStorage.getItem(key)

        if (storageValue) {
            const parsed = JSON.parse(storageValue)

            return parsed
        }

        return initialState
    })

    useEffect(() => {
        const store = () => {
            localStorage.setItem(key, JSON.stringify(state))
        }

        store()
    }, [key, state])

    return [state, setState]
}

export default usePersistedState
