import React from "react";

export class Welcome extends React.Component {

    render() {

        return(
            <div className="welcome">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8"><h1 className="welcome-title">Welcome to Beta of Brain Master</h1></div>
                        <div className="col-md-2"></div>
                    </div>
                </div>
            </div>
        )
    }

}
