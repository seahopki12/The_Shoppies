import React from "react";
import { useStoreContext } from "../../utils/GlobalState";
import Alert from "react-bootstrap/Alert";

function NominationAlert() {
    const [state] = useStoreContext();

    const handleAlert = () => {
        if (state.nominated.length !== 5) {
            return false;
        } else {
            return true;
        }
    }

    return (
        <Alert show={handleAlert()} variant="danger">
            You have reached your max of 5 nominations.
        </Alert>
    )
}

export default NominationAlert;