import React from 'react';
import {fakeAuth} from "../auth/Auth";
import {useHistory, useLocation} from "react-router-dom";

function Login() {
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    return (
        <div>
            <p>You must log in to view the page</p>
            <button onClick={() => {
                fakeAuth.authenticate(() => {
                    history.replace(from);
                });
            }}>Log in</button>
        </div>
    );
}

export default Login;