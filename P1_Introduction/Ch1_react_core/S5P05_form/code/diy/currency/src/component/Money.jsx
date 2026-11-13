import { Component } from "react";

class Money extends Component {
  changeHandler = (e) => {
    this.props.convert(e.target.value);
  };

  render() {
    return (
      <fieldset>
        <legend>{this.props.currency}</legend>
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
