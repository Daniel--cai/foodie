import * as React from "react";
import classnames from "classnames";

interface OrderFooterProps {
  isScrollable: boolean;
}
export default (props: OrderFooterProps) => {
  return (
    <React.Fragment>
      <footer
        className={classnames("sticky-footer", {
          "sticky-footer--scrollable": !props.isScrollable
        })}
      >
        <button className="button is-primary is-fullwidth is-rounded is-large">
          Order
        </button>
      </footer>
    </React.Fragment>
  );
};
