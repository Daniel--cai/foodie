import * as React from "react";
import * as classnames from "classnames";

export enum ColumnWidth {
  Half = "is-half",
  Third = "is-one-third",
  Quarter = "is-one-quarter"
}

interface Props {
  onClick: (select: string[]) => void;
  items: string[];
  default?: string[];
  width?: ColumnWidth;
  single?: boolean;
  required?: boolean;
}

interface State {
  select: string[];
}

class SelectOptions extends React.Component<Props, State> {
  state = {
    select: this.props.default || []
  };

  handleClick = (value: string) => () => {
    let select = this.state.select;
    const index = select.findIndex(item => item === value);
    if (index == -1) {
      if (this.props.single) {
        select = [];
      }
      select.push(value);
    } else if (!this.props.required) {
      select.splice(index, 1);
    }
    this.setState({ select });
    this.props.onClick(select);
  };

  render() {
    return (
      <div className="columns is-multiline">
        {this.props.items.map((item, index) => {
          const isSelected =
            this.state.select.findIndex(curr => curr === item) != -1;
          return (
            <div
              className={`column ${this.props.width || "is-half"}`}
              key={index}
            >
              <button
                className={classnames("button", "is-fullwidth", "is-medium", {
                  "is-primary": isSelected
                })}
                key={index}
                onClick={this.handleClick(item)}
              >
                {item}
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SelectOptions;
