export type Movie = {
    id: number,
    name: string,
    popularity: number,
    overview: string,
    vote_average: number,
    vote_count: number,
}

export type PaginationRequest = {
    page: number,
    total_pages: number,
    total_results: number,
}

export type MovieRequest = PaginationRequest & {
    results: Movie[],
}

const API_KEY = process.env.REACT_APP_API_KEY

export type ApiParams = {
    page?: number
}

export type SearchMoviesParams = ApiParams & {
    search?: string
}

export const getMovies = async ({ page = 1 }: ApiParams) => {
    return fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=${page}&timezone=America/New_York&include_null_first_air_dates=false`)
        .then(response => response.json())
        .catch(console.error)
}

export const searchMovies = async ({ page = 1, search = "" }: SearchMoviesParams) => {
    return fetch(`https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&language=en-US&page=${page}&include_adult=false&query=asdas&query=${search}`)
        .then(response => response.json())
        .catch(console.error)
}


