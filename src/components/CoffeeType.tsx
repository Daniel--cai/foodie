import * as React from "react";
import { withRouter } from "react-router";

interface Props {
  img: string;
  type: string;
  description: string;
}
class CoffeeType extends React.Component<any, any> {
  render() {
    return (
      <tr
        className="menu-item"
        onClick={() => this.props.history.push(`/customise`)}
      >
        <td className="menu-item__img">
          <img className="is-vertical-align" src={this.props.img} />
        </td>
        <td className="is-vertical-align">
          <span className="">
            <b>{this.props.type}</b>
          </span>
        </td>
        <td className="is-vertical-align has-text-right	">
          <span className="icon ">
            <i className="fas fa-chevron-right" />
          </span>
        </td>
      </tr>
    );
  }
}
export default withRouter(CoffeeType);
