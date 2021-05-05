import React, { useRef } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_MOVIES, LOADING } from "../../utils/actions";
import API from "../../utils/API";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

function SearchCard() {
    const titleRef = useRef();
    const [state, dispatch] = useStoreContext();

    const handleChange = e => {
        e.preventDefault();
        dispatch({ type: LOADING });
        API.getMoviesByTitle(titleRef.current.value)
            .then(results => {
                dispatch({
                    type: UPDATE_MOVIES,
                    movies: results
                });
            })
            .catch(err => console.log(err));
    };

    return (
        <Row>
            <Col md="12">
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Movie Title</Form.Label>
                    <Form.Control onChange={handleChange} ref={titleRef} type="search" placeholder="Search movie" />
                </Form.Group>
            </Col>
        </Row>
    )
}

export default SearchCard;