import React from "react";
import TemperatureInput from "./TemperatureInput";
import BoilingVerdict from "./BoilingVerdict";
import { toCelsius, toFahrenheit, tryConvert } from "../utils";

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: "",
      scale: "c",
    };
  }

  handleCelsiusChange = (temperature) => {
    this.setState({
      temperature,
      scale: "c",
    });
  };

  handleFahrenheitChange = (temperature) => {
    this.setState({
      temperature,
      scale: "f",
    });
  };

  render() {
    const { scale, temperature } = this.state;
    const celsius =
      scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit =
      scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </>
    );
  }
}
