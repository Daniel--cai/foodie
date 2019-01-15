import * as React from "react";
import CoffeeOrder from "./CoffeeOrder";
import CustomiseOrder from "./CustomiseOrder";
import OrderFooter from "./OrderFooter";
import CustomiseOrderNote from "./CustomiseOrderNote";
import Customisations from "../constants/Customisations";
import CoffeeTypes from "../constants/CoffeeTypes";
export default class App extends React.Component<any, any> {
  render() {
    return (
      <div>
        <CoffeeOrder coffeeTypes={CoffeeTypes} />
        {/* {Customisations.map(customisation => (
          <CustomiseOrder
            header={customisation.header}
            values={customisation.values}
          />
        ))}
        <OrderFooter /> */}
      </div>
    );
  }
}
