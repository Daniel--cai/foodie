import * as React from "react";
import CoffeeType from "./CoffeeType";
import CoffeeTypes from "../constants/CoffeeTypes";
import QueueFooter from "./QueueFooter";

export default () => {
  return (
    <React.Fragment>
      <div className="coffettype__panel">
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
      <QueueFooter />
    </React.Fragment>
  );
};
