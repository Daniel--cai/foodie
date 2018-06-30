import * as React from "react"
const CoffeeType = (props: { img: string, type: string, description: string }) => (
    <tr className="active">
        <td >
            <img src={props.img} alt="" className="responsive-img valign" />
        </td>
        <td >
            <b>{props.type} </b>
            <br />
            {props.description}
        </td>
    </tr>
);
export default CoffeeType;

