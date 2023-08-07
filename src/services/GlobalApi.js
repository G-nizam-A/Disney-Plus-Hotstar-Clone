import axios from 'axios';
                      
const movieBaseUrl = "https://api.themoviedb.org/3"
const api_key = 'your-api-key'
const movieGenre = 'https://api.themoviedb.org/3/discover/movie?api_key=your-api-key'

const getTrending = axios.get(movieBaseUrl+"/trending/all/day?api_key="+api_key)
const getMovieGenre=(id)=>axios.get(movieGenre+"&with_genres="+id)
export default  {
    getTrending , getMovieGenre
}