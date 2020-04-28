import React from 'react';
import {useHistory} from "react-router-dom";
import {fakeAuth} from "../auth/Auth";

function Logout() {
    let history = useHistory();

    return fakeAuth.isAuthenticated ? (
    <button type='button' onClick={() => { fakeAuth.signout(() => {history.push('/') }) }}>
        Logout
    </button>
    ) : (
        null
    );

}

export default Logout;