import { Component } from "react";
import Money from "./components/Money";
import { usd2Rmb, rmb2Usd, tryConvert } from "./utils";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currencyType: "r",
      amount: "",
    };
  }

  handleRmbChange = (amount) => {
    this.setState({
      currencyType: "r",
      amount,
    });
  };

  handleUsdChange = (amount) => {
    this.setState({
      currencyType: "u",
      amount,
    });
  };

  render() {
    const { amount, currencyType } = this.state;
    const rmb = currencyType === "r" ? amount : tryConvert(amount, usd2Rmb);
    const usd = currencyType === "u" ? amount : tryConvert(amount, rmb2Usd);
    return (
      <>
        <Money currency="r" value={rmb} convert={this.handleRmbChange} />
        <Money currency="u" value={usd} convert={this.handleUsdChange} />
      </>
    );
  }
}

export default App;
