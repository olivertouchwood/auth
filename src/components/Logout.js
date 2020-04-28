import React from 'react';
import {withRouter} from "react-router-dom";
import {fakeAuth} from "../auth/Auth";

const LogoutButton = withRouter(({ history }) => (
    <button type='button' onClick={() => { fakeAuth.signout(() => {history.push('/') }) }}>
        Logout
    </button>
));

class Logout extends React.Component {

    render() {
        console.log(this.props);
        if (this.props.isAuthenticated) {
            return (
                <p>test</p>
            )
        } else {
            return null;
        }
    }

}

export default Logout;