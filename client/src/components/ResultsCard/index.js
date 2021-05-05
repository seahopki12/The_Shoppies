import React from "react";
import Col from "react-bootstrap/Col";
import { useStoreContext } from "../../utils/GlobalState"
import { ADD_NOMINATION, LOADING } from "../../utils/actions";
import API from "../../utils/API";

function ResultsCard() {
    const [state, dispatch] = useStoreContext();

    const addNom = savedMovie => {
        dispatch({ type: LOADING });
        API.saveMovie({
            title: savedMovie.title,
            year: savedMovie.year
        })
            .then(result => {
                console.log(result);
                dispatch({
                    type: ADD_NOMINATION,
                    movie: result.data
                });
            })
            .catch(err => console.log(err));
    };

    return (
        <Col>
            <h3>Results for...</h3>
            <ul>
                {state.movies.map((movie, index) => (
                    <li key={index}>
                        {movie.title} ({movie.year})
                        <button onClick={() => {addNom(movie)}}>Nominate</button>
                    </li>
                ))}
            </ul>
        </Col>
    )
}

export default ResultsCard;


