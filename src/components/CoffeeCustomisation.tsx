import React, { useState, useContext, Fragment } from "react";
import { CustomiseOrder } from "./CustomiseOrder";
import Customisations, {
  CustomisationTypeArray,
  CustomisationType
} from "../constants/Customisations";
import CoffeeTypes from "../constants/CoffeeTypes";
import OrderFooter from "./OrderFooter";
import Header from "./Header";

interface CoffeeCustomisationProps {
  handleScroll: any;
}

const defaultValue: CustomisationTypeArray = {
  milk: "full",
  sugar: "0",
  strength: "regular",
  size: "regular",
  temp: "normal",
  flavour: "none",
  dash: "none"
};

export default (props: CoffeeCustomisationProps) => {
  const [bottomScroll, setBottomScroll] = useState(false);
  const [state, setState] = useState(defaultValue);
  function handleScroll(e: any) {
    setBottomScroll(
      e.target.scrollHeight - e.target.scrollTop == e.target.clientHeight
    );
  }

  const handleClick = (header: CustomisationType) => (value: string) => {
    setState({ ...state, [header]: value });
  };

  return (
    <Fragment>
      <Header onBack="/" heading="Preferences" />
      <div className="selected">
        <img className="" src={CoffeeTypes[0].img} />
      </div>
      <div className="customise__panel" onScroll={handleScroll}>
        {Customisations.map(customisation => (
          <CustomiseOrder
            header={customisation.header}
            values={customisation.values}
            img={customisation.img}
            key={customisation.header}
            value={state[customisation.header]}
            onClick={handleClick(customisation.header)}
          />
        ))}
      </div>
      <OrderFooter isScrollable={bottomScroll} />
    </Fragment>
  );
};
