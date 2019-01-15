import * as React from "react";
import CoffeeType from "./CoffeeType";
import { Icon, Label } from "semantic-ui-react";

export default (props: { coffeeTypes: any[] }) => {
  return (
    <div className="no-pad-bot">
      <table className="menu table is-fullwidth">
        <tbody>
          {props.coffeeTypes.map(coffeeType => (
            <CoffeeType
              img={coffeeType.img}
              type={coffeeType.type}
              description={coffeeType.description}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
