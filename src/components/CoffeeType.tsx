import * as React from "react";
const CoffeeType = (props: {
  img: string;
  type: string;
  description: string;
}) => (
  <div>
    <img src={props.img} width="100%" />
    <b>{props.type} </b>
  </div>
);
export default CoffeeType;
