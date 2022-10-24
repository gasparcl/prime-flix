// Note: You have to create your api_key to fetch movies
//          from TheMoviesDb API and Google API
//
// INFO ABOUT KEYS
//      Get inside .env.example to know how create your api credentials
//
// Default fetch language is en-us, so it's an optional parameter
// const FETCH_LANGUAGE = "en-US" ## You can find more about languages here:
//                      https://developers.themoviedb.org/3/getting-started/languages
//
// ╔╦╗╔═╗╔╦╗╔═╗╔╦╗╔═╗╔╦╗╔═╗
// ║║║║╣  ║ ╠═╣ ║║╠═╣ ║ ╠═╣
// ╩ ╩╚═╝ ╩ ╩ ╩═╩╝╩ ╩ ╩ ╩ ╩

const FETCH_LANGUAGE = "en-US" // example: "pt-BR"

const FETCH_PARAMS = {
    api_key: process.env.REACT_APP_THEMOVIEDB_API_KEY, // GET INSIDE .env.example to know how to get your credentials
    language: FETCH_LANGUAGE,
    region: "US",
}

const IMAGE_URL = "https://image.tmdb.org/t/p/original" // default apiEndPoint link to get images

export { FETCH_PARAMS, IMAGE_URL }
