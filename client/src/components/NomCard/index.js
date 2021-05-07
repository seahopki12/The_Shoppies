import React, { useEffect } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_NOMINATION, LOADING, UPDATE_NOMINATION } from "../../utils/actions";
import API from "../../utils/API";
import Col from "react-bootstrap/Col";

function NomCard() {
    const [state, dispatch] = useStoreContext();

    const getNominated = () => {
        dispatch({ type: LOADING });
        API.getNominated()
            .then(results => {
                dispatch({
                    type: UPDATE_NOMINATION,
                    nominated: results.data
                });
            })
            .catch(err => console.log(err));
    };

    const removeNominated = id => {
        API.deleteNominated(id)
            .then(() => {
                dispatch({
                    type: REMOVE_NOMINATION,
                    _id: id
                });
            })
            .catch(err => console.log(err));
    };

    useEffect(() => {
        getNominated();
    }, []);

    return (
        <Col>
            <h3>Nominations</h3>
            {state.nominated.map(nominee => (
                <ul key={nominee._id}>
                    <li>
                        {nominee.title} ({nominee.year})
                                <span>
                            <button onClick={() => { removeNominated(nominee._id) }}>X</button>
                        </span>
                    </li>
                </ul>
            ))}
        </Col>
    )
}

export default NomCard;