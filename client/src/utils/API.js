import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getSaved: function() {
        return axios.get("/api/books");
      },
    saveMovie: function (movieData) {
        return axios.post("/api/movies", movieData);
    },
    getMoviesByTitle: function (title) {
        return new Promise((resolve, reject) => {
            axios
                .get(`http://www.omdbapi.com/?i=tt3896198&apikey=eb241b03&s=${title}`)
                .then(res => {
                    const movies = res.data.Search;
                    console.log(movies);
                    const results = movies.map(movie => {
                        return {
                            title: movie.Title,
                            year: movie.Year
                        };
                    });
                    resolve(results);
                })
                .catch(err => reject(err));
        });
    },
};