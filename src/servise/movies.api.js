const keyApi = 'bd090e5d17933448065d52d55259f1d4';

const fetchMoviesApi = () => {
    return fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${keyApi}`)
        .then(res => { if (res.ok) { return res.json() } })
}

const fetchSearchApi = (query) => {
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${keyApi}&query=${query}`)
        .then(res => { if (res.ok) { return res.json() } })
}
const fetchDetailsApi = (id) => {
    return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${keyApi}`)
        .then(res => { if (res.ok) { return res.json() } })
}
const fetchImgApi = (id) => {
    return fetch(`https://api.themoviedb.org/3/configuration?api_key=${keyApi}`)
        .then(res => { if (res.ok) { return res.json() } })
}
const fetchCreditsApi = (id) => {
    return fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${keyApi}`)
        .then(res => { if (res.ok) { return res.json() } })
}
const fetchReviewsApi = (id) => {
    return fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${keyApi}`)
        .then(res => { if (res.ok) { return res.json() } })
}

export {fetchMoviesApi, fetchSearchApi, fetchDetailsApi, fetchImgApi, fetchCreditsApi, fetchReviewsApi } ;