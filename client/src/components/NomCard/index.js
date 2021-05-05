import React, { useEffect } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_NOMINATION, LOADING, UPDATE_NOMINATION } from "../../utils/actions";
import API from "../../utils/API";
import Col from "react-bootstrap/Col";

function NomCard() {
    const [state, dispatch] = useStoreContext();

    const getNominated = () => {
        dispatch({ type: LOADING });
        API.getnomineed()
            .then(results => {
                dispatch({
                    type: UPDATE_NOMINATION,
                    nomineed: results.data
                });
            })
            .catch(err => console.log(err));
    };

    const removeFromNominated = id => {
        API.deletenominee(id)
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
                            <i onClick={() => { removeFromNominated(nominee._id) }}>X</i>
                        </span>
                    </li>
                </ul>
            ))}
        </Col>
    )
}

export default NomCard;