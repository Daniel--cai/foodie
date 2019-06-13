import * as React from "react";
import CustomiseOrder from "./CustomiseOrder";
import Customisations from "../constants/Customisations";
import CoffeeTypes from "../constants/CoffeeTypes";
import OrderFooter from "./OrderFooter";

export default () => {
  return (
    <React.Fragment>
      <div className="selected">
        <img className="" src={CoffeeTypes[0].img} />
      </div>
      <div className="customise__panel">
        <table className="table ">
          <tbody>
            {Customisations.map(customisation => (
              <tr>
                <td className="">
                  <CustomiseOrder
                    header={customisation.header}
                    values={customisation.values}
                    img={customisation.img}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <OrderFooter />
    </React.Fragment>
  );
};
