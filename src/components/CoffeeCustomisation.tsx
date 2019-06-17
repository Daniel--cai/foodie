import * as React from "react";
import { useState } from "react";
import CustomiseOrder from "./CustomiseOrder";
import Customisations from "../constants/Customisations";
import CoffeeTypes from "../constants/CoffeeTypes";
import OrderFooter from "./OrderFooter";

interface CoffeeCustomisationProps {
  handleScroll: any;
}

export default (props: CoffeeCustomisationProps) => {
  const [bottomScroll, setBottomScroll] = useState(false);
  function handleScroll(e: any) {
    setBottomScroll(
      e.target.scrollHeight - e.target.scrollTop == e.target.clientHeight
    );
  }

  return (
    <React.Fragment>
      <div className="selected">
        <img className="" src={CoffeeTypes[0].img} />
      </div>
      <div className="customise__panel" onScroll={handleScroll}>
        {Customisations.map(customisation => (
          <CustomiseOrder
            header={customisation.header}
            values={customisation.values}
            img={customisation.img}
          />
        ))}
      </div>

      <OrderFooter isScrollable={bottomScroll} />
    </React.Fragment>
  );
};
