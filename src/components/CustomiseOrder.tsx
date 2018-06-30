import * as React from "react";

export default (props: { header: string, values: string[] }) => {
    return (
        <React.Fragment>
            <div className="choice-header">
                <div className="container">
                    <b>{props.header}</b>
                </div>
            </div>
            <div className="container">
                <form className="col s12">
                    <div className="row">
                        {props.values.map(value => {
                            return (
                                <label className="choice">
                                    <div className="col s10">
                                        <span>{value}</span>
                                    </div>
                                    <div className="col s2">
                                        <input name={props.header} type="radio" className="with-gap" />
                                        <span></span>
                                    </div>
                                </label>
                            )
                        })}

                    </div>
                </form>
            </div>
        </React.Fragment>
    )
}