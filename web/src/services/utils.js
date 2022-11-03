// ╦ ╦╔═╗╔╗╔╔╦╗╦  ╔═╗╦═╗╔═╗
// ╠═╣╠═╣║║║ ║║║  ║╣ ╠╦╝╚═╗
// ╩ ╩╩ ╩╝╚╝═╩╝╩═╝╚═╝╩╚═╚═╝

/**
 * Function to verify if a film is inside favorited films list, into localStorage
 *
 * @param {{
 * filmsArr: Array
 * currentFilm: object
 * }} props - isFavoritedFilm props
 *
 */
const isFavoritedFilm = (filmsArr, currentFilm) =>
    filmsArr.some((favorite) => favorite.id === currentFilm.id)

/**
 * Function to make pagination from array and slice it's items into groups of new arrays
 *
 * @param {{
 * arr: Array
 * size: number
 * }} props - paginateFromArr props
 *
 */
const paginateFromArr = (arr, size) => {
    return arr.reduce((acc, val, i) => {
        let idx = Math.floor(i / size)
        let page = acc[idx] || (acc[idx] = [])
        page.push(val)

        return acc
    }, [])
}

/**
 * Functions to make current element scroll up
 */
const scrollTop = () => {
    let timeOut = undefined

    timeOut = setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)

    return () => clearTimeout(timeOut)
}

const scrollTopModal = () => {
    const target = window.document.getElementById("searchModal")

    if (target) {
        let timeOut = undefined

        timeOut = setTimeout(() => {
            target.scrollTo({ top: 0, behavior: "smooth" })
        }, 100)

        return () => clearTimeout(timeOut)
    }
}

export { isFavoritedFilm, paginateFromArr, scrollTop, scrollTopModal }
