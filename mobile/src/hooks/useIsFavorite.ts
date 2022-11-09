import {useContext, useCallback} from "react"
import {FavoritesContext} from "../context/Favorite"

export function useIsFavorite() {
    const context = useContext(FavoritesContext)

    return useCallback((type: keyof typeof context, id: string) => {
        const {data} = context[type]
        
        return data.some(item => item.id === id)
    }, [context])
}
