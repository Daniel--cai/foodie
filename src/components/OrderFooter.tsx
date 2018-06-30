import * as React from "react";

export default () => {
    return <React.Fragment>
        <div className="action-button-footer-placeholder" />
        <footer className="page-footer action-button-footer">
            <div className="row">
                <div className="col s6">
                    <i className="material-icons ">close</i>
                </div>
                <div className="col s6">
                    <i className="material-icons">check</i>
                </div>
            </div>
        </footer>
    </React.Fragment>
}