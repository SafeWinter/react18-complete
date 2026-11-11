import React from "react";
import BoilingVerdict from "./BoilingVerdict";

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      temperature: "",
    };
  }

  handleChange(e) {
    this.setState({
      temperature: e.target.value,
    });
  };

  render() {
    return (
      <fieldset>
        <legend>Enter temperature in Celsius:</legend>
        <input
          type="text"
          placeholder="Enter temperature"
          value={this.state.temperature}
          onChange={this.handleChange}
        />
        <BoilingVerdict celsius={parseFloat(this.state.temperature)} />
      </fieldset>
    );
  }
}
