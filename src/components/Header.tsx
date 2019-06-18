import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router";

interface Props extends RouteComponentProps {
  onBack: string;
  heading: string;
}

const Header = (props: Props) => {
  return (
    <React.Fragment>
      <div className="header">
        <div
          className="header__left"
          onClick={() => props.history.push(props.onBack)}
        >
          <div className="">
            <span className="icon ">
              <i className="fas fa-chevron-left" />
            </span>
          </div>
        </div>
        <div className="header__center">
          <b>{props.heading}</b>
        </div>
        <div className="header__right" />
      </div>
    </React.Fragment>
  );
};

export default withRouter<Props>(Header);
