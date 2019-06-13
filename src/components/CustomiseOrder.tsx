import * as React from "react";
import * as Customisation from "../constants/Customisations";
interface Props {
  header: string;
  values: string[];
  img: string;
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
          <div className="column is-one-fifth has-text-centered">
            <div>
              <img src={this.props.img} className="icon-img" />
            </div>
            <b className="has-text-primary-dark">{this.props.header}</b>
          </div>
          <div className="column customise__row">
            {this.props.values.map((value, index) => {
              if (index == 2)
                return (
                  <div className="customise__labels customise__labels--active">
                    {value}
                  </div>
                );
              return <div className="customise__labels">{value}</div>;
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
