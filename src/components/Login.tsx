import * as React from "react";

interface Props {}

interface State {}

export default class Login extends React.Component<Props, any> {
  render() {
    return (
      <div className="section">
        <div className="title has-text-primary-dark">Good Morning!</div>
        <div className="field">
          <div className="control">
            <input
              className="login-input input"
              type="text"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input
              className="login-input input"
              type="password"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="has-text-right">
          <a className=" is-size-7">Forgot password?</a>
        </div>
        <br />
        <br />
        <button className="button is-primary is-fullwidth is-rounded is-large">
          Login
        </button>
        <br />
        <div className="has-text-centered ">
          <span className="is-size-7 has-text-grey-light">
            Don't have an account? <a className="is-size-7"> Register</a>
          </span>
        </div>
      </div>
    );
  }
}
