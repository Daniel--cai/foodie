import * as React from "react";
import classnames from "classnames";

interface Props {
  count: number;
}

export default (props: Props) => {
  return (
    <React.Fragment>
      <footer className="sticky-footer">{props.count} coffees brewing</footer>
    </React.Fragment>
  );
};
