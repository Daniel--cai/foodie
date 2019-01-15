import * as React from "react";
export default () => {
  return (
    <React.Fragment>
      <div className="header is-5 has-no-bottom-margin">
        <div className="level is-mobile">
          <div className="level-left">
            <div className="level-item">
              <span className="icon ">
                <i className="fas fa-chevron-left" />
              </span>
            </div>
          </div>
          <div className="level-item">
            <span>Customise</span>
          </div>
          <div className="level-right">
            <div className="level-item">
              <span className="icon is-invisible">
                <i className="fas fa-chevron-right" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
