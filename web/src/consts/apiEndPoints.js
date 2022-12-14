export const apiEndPoints = {
    movies: {
        root: "movie",
        movie(id) {
            return `${this.root}/${id}`
        },
        get nowPlaying() {
            return `${this.root}/now_playing`
        },
        get popular() {
            return `${this.root}/popular`
        },
        get topRated() {
            return `${this.root}/top_rated`
        },
        get upcoming() {
            return `${this.root}/upcoming`
        },
    },
    search: {
        root: "search",
        get movie() {
            return `${this.root}/movie`
        },
    },
}
