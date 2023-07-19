import axios from 'axios';
                      
const movieBaseUrl = "https://api.themoviedb.org/3"
const api_key = '1293b879f03edfa88656fbea2abc4c39'
const movieGenre = 'https://api.themoviedb.org/3/discover/movie?api_key=1293b879f03edfa88656fbea2abc4c39'

const getTrending = axios.get(movieBaseUrl+"/trending/all/day?api_key="+api_key)
const getMovieGenre=(id)=>axios.get(movieGenre+"&with_genres="+id)
export default  {
    getTrending , getMovieGenre
}