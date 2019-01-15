import * as React from "react";
import CustomiseOrder from "./CustomiseOrder";
import Customisations from "../constants/Customisations";
import OrderFooter from "./OrderFooter";
export default () => {
  return (
    <React.Fragment>
      {Customisations.map(customisation => (
        <CustomiseOrder
          header={customisation.header}
          values={customisation.values}
        />
      ))}
      <OrderFooter />
    </React.Fragment>
  );
};
