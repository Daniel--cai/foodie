import * as React from "react";

interface Props {
    header: string;
    values: string[];
}

interface State {

}

export default class CustomiseOrder extends React.Component<Props, any>{
    render() {
        return (
            <React.Fragment>
                <div className="choice-header">
                    <div className="container">
                        <b>{this.props.header}</b>
                    </div>
                </div>
                <div className="container">
                    <form className="col s12">
                        <div className="row">
                            {this.props.values.map(value => {
                                return (
                                    <label className="choice">
                                        <div className="col s10">
                                            <span>{value}</span>
                                        </div>
                                        <div className="col s2">
                                            <input name={this.props.header} type="radio" className="with-gap" />
                                            <span></span>
                                        </div>
                                    </label>
                                )
                            })}

                        </div>
                    </form>
                </div>
            </React.Fragment >
        )
    }
}