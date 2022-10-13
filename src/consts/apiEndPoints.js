export const apiEndPoints = {
    movies: {
        root: "movie",
        movie(id) {
            return `${this.root}/${id}`
        },
        get nowPlaying() {
            return `${this.root}/now_playing`
        },
    },
}
