import * as React from "react";
import CoffeeType from "./CoffeeType";
import CoffeeTypes from "../constants/CoffeeTypes";

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
              key={coffeeType.type}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
