import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getSaved: function () {
        return axios
            .get("/api/books")
            .catch(err => {
                if (err.response) {
                    // client received an error response (5xx, 4xx)
                } else if (err.request) {
                    // client never received a response, or request never left
                } else {
                    // anything else
                }
            })

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