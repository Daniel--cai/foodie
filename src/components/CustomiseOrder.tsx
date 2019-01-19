import * as React from "react";

interface Props {
  header: string;
  values: string[];
}

interface State {}

export default class CustomiseOrder extends React.Component<Props, any> {
  state: {
    selected: {};
  };
  render() {
    return (
      <React.Fragment>
        <div className="columns is-mobile">
          <div className="column is-one-quarter ">
            <b className="has-text-primary-dark">{this.props.header}</b>
          </div>
          {this.props.values.map(value => {
            return (
              <div className="column">
                {value && (
                  <img
                    src="../assets/espresso.svg"
                    className="is-half-transparent"
                  />
                )}
                {/* <span>{value}</span> */}

                {/* <input
                  name={this.props.header}
                  type="radio"
                  className="with-gap"
                />
                <span /> */}
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}
