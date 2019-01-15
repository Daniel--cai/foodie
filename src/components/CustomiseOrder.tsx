import * as React from "react";

interface Props {
  header: string;
  values: string[];
}

interface State {}

export default class CustomiseOrder extends React.Component<Props, any> {
  render() {
    return (
      <React.Fragment>
        <div className="choice-header">
          <div className="container">
            <b>{this.props.header}</b>
          </div>
        </div>
        <form className="columns">
          <div className="">
            {this.props.values.map(value => {
              return (
                <label className="choice">
                  <div className="column is-10">
                    <span>{value}</span>
                  </div>
                  <div className="column is-2">
                    <input
                      name={this.props.header}
                      type="radio"
                      className="with-gap"
                    />
                    <span />
                  </div>
                </label>
              );
            })}
          </div>
        </form>
      </React.Fragment>
    );
  }
}
