const fetchMoviesApi = () => {
    return fetch('https://api.themoviedb.org/3/trending/all/day?api_key=bd090e5d17933448065d52d55259f1d4')
        .then(res => { if (res.ok) { return res.json() } })
}

export default fetchMoviesApi;