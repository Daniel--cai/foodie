import * as React from "react";
import CoffeeType from "./CoffeeType";
import CoffeeTypes from "../constants/CoffeeTypes";
import QueueFooter from "./QueueFooter";
import Header from "./Header";

export default () => {
  return (
    <React.Fragment>
      <Header onBack="/login" heading="Coffee" />
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
      <QueueFooter count={12} />
    </React.Fragment>
  );
};
