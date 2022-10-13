import { API_KEY } from "./.apiKey" // Please, desconsider this import

//
// Note: You have to create your api_key to fetch movies
//          from API, to test the application
//
// const API_KEY = "s4d5sa5ss6as5da4a6sG45G45G6s5qQ" ## API KEY EXAMPLE - please, set
//                   yours here: https://www.themoviedb.org/settings/api
//
// Default fetch language is en-us, so it's an optional parameter
// const FETCH_LANGUAGE = "en-US" ## You can find more about languages here:
//                      https://developers.themoviedb.org/3/getting-started/languages
//
// ╔╦╗╔═╗╔╦╗╔═╗╔╦╗╔═╗╔╦╗╔═╗
// ║║║║╣  ║ ╠═╣ ║║╠═╣ ║ ╠═╣
// ╩ ╩╚═╝ ╩ ╩ ╩═╩╝╩ ╩ ╩ ╩ ╩
// const API_KEY = "YOUR_API_KEY_HERE" THEN UNCOMMENT THIS CONSTANT"
const FETCH_LANGUAGE = "en-US"

const FETCH_PARAMS = {
    api_key: API_KEY,
    language: FETCH_LANGUAGE,
    page: 1,
}

const IMAGE_URL = "https://image.tmdb.org/t/p/original"

export { FETCH_LANGUAGE, FETCH_PARAMS, IMAGE_URL }
