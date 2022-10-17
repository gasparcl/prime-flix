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

export { isFavoritedFilm }
