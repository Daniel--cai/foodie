import * as React from "react";
import CoffeeType from "./CoffeeType";
import CoffeeTypes from "../constants/CoffeeTypes";
import { Icon, Label } from "semantic-ui-react";

export default () => {
  return (
    <div className="no-pad-bot">
      <table className="menu table is-fullwidth">
        <tbody>
          {CoffeeTypes.map(coffeeType => (
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
