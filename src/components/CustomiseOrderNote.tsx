import * as React from "react";

export default (props: {}) => {
    return (<div className="container">
        <form className="col s12">
            <div className="row">
                <div className="input-field col s12">
                    <input placeholder="Extra note or message" id="note" type="text" className="" />
                    <label htmlFor="note">Extra Note</label>
                </div>
            </div>
        </form>
    </div>
    )
}