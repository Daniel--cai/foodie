import * as React from "react";
import CustomiseOrder from "./CustomiseOrder";
import Customisations from "../constants/Customisations";
import OrderFooter from "./OrderFooter";
export default () => {
  return (
    <React.Fragment>
      <table className="table is-fullwidth">
        <tbody>
          {Customisations.map(customisation => (
            <tr>
              <td>
                <CustomiseOrder
                  header={customisation.header}
                  values={customisation.values}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <OrderFooter />
    </React.Fragment>
  );
};
