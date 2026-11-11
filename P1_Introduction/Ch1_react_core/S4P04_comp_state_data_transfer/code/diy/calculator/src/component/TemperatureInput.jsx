import React from "react";

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
};

export default class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      temperature: e.target.value,
    });
  }

  render() {
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[this.props.scale]}:</legend>
        <input
          type="text"
          value={this.state.temperature}
          onChange={this.handleChange}
        />
      </fieldset>
    );
  }
}
