const API_Key = 'a8d2d21829214ce094ad3ea7776e473d'

export default {
    fetchTrending: `/trending/all/week?api_key=${API_Key}&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${API_Key}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_Key}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_Key}&with_genres=35`
}