import React, { useState, Fragment, useContext } from "react";
import CustomisationType, { Customisation } from "../constants/Customisations";
import classnames from "classnames";

interface Props extends Customisation {
  value: string;
  onClick: (value: string) => void;
}

export const CustomiseOrder = (props: Props) => {
  return (
    <Fragment>
      <div className="customise__row">
        <div className="customise__row__heading">
          <div>
            <img src={props.img} className="icon-img" />
          </div>
          <b className="has-text-primary-dark">{props.header}</b>
        </div>
        <div className="customise__row__options">
          {props.values.map((value, index) => {
            return (
              <div
                className={classnames("customise__labels", {
                  "customise__labels--active": value === props.value
                })}
                onClick={() => props.onClick(value)}
                key={value}
              >
                {value}
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};
