import { Component } from "react";

const CURRENCY_LABEL = {
  u: "USD",
  r: "RMB",
};

class Money extends Component {
  changeHandler = (e) => {
    this.props.convert(e.target.value);
  };

  render() {
    return (
      <fieldset>
        <legend>{CURRENCY_LABEL[this.props.currency]}</legend>
        <input
          type="text"
          value={this.props.value}
          onChange={this.changeHandler}
        />
      </fieldset>
    );
  }
}

export default Money;
