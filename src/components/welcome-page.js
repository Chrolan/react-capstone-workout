import requiresLogin from "./requires-login";
import React from "react";

export class Welcome extends React.Component {

    render() {

        return (
            <div className="welcome">
                <div className="dashboard-protected-data">
                    <h2>WELCOME!</h2>
                    <div className="welcome-message row">
                        <p>Welcome to Jordi's Workout app. To begin, create a workout!</p>
                        <p>If you've already created a work out, visit your dashboard to view and edit them.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default requiresLogin()(Welcome);