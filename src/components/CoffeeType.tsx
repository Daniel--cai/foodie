import * as React from "react";
const CoffeeType = (props: {
  img: string;
  type: string;
  description: string;
}) => (
  <tr className="">
    <td>
      <img className="menu-item-img" src={props.img} />
    </td>
    <td className="is-vertical-align">
      <span className="is-4 title">{props.type}</span>
    </td>
  </tr>
);
export default CoffeeType;
