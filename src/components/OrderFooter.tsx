import * as React from "react";
import { Icon } from "semantic-ui-react";
export default () => {
  return (
    <React.Fragment>
      <div className="sticky-footer-placeholder" />
      <footer className="sticky-footer section">
        <button className="button is-primary is-fullwidth is-rounded is-large">
          Order
        </button>
      </footer>
    </React.Fragment>
  );
};
