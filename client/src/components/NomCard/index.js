import React, { useEffect } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_SAVE, LOADING, UPDATE_SAVED, UPDATE_NOMINATION } from "../../utils/actions";
import API from "../../utils/API";
import Col from "react-bootstrap/Col";

function NomCard() {
    const [state, dispatch] = useStoreContext();

    const getNominated = () => {
        dispatch({ type: LOADING });
        API.getSaved()
            .then(results => {
                dispatch({
                    type: UPDATE_NOMINATION,
                    saved: results.data
                });
            })
            .catch(err => console.log(err));
    };

    // const removeFromSaved = id => {
    //     API.deleteSave(id)
    //         .then(() => {
    //             dispatch({
    //                 type: REMOVE_SAVE,
    //                 _id: id
    //             });
    //         })
    //         .catch(err => console.log(err));
    // };

    useEffect(() => {
        getNominated();
    }, []);

    return (
        <Col>
            <h3>Nominations</h3>
            <ul></ul>
        </Col>
    )
}

export default NomCard;