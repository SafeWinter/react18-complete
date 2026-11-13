import { Component } from "react";
import Money from "./component/Money";

function exchange(amount, rate) {
  if(isNaN(amount) || amount === "") {
    return "";
  }
  return (amount * rate).toFixed(2);
}

const [USD2RMB_RATE, RMB2USD_RATE] = [7.3255, 0.1365]; // 2022-11-01
// const [USD2RMB_RATE, RMB2USD_RATE] = [6.6708, 0.1499]; // 2026-11-10

class App extends Component {
  state = {
    usd: "",
    rmb: "",
  };

  usd2Rmb = (usd) => {
    if(isNaN(parseFloat(usd)) || usd === "" || parseFloat(usd) < 0) {
      alert('Please enter a valid number greater than or equal to 0');
      return;
    }

    this.setState({
      usd,
      rmb: exchange(usd, USD2RMB_RATE),
    });
  }

  rmb2Usd = (rmb) => {
    if(isNaN(parseFloat(rmb)) || rmb === "" || parseFloat(rmb) < 0) {
      alert('Please enter a valid number greater than or equal to 0');
      return;
    }
    
    this.setState({
      rmb,
      usd: exchange(rmb, RMB2USD_RATE),
    });
  }

  render() {
    return (
      <>
        <Money currency="USD" value={this.state.usd} convert={this.usd2Rmb}/>
        <Money currency="RMB" value={this.state.rmb} convert={this.rmb2Usd}/>
      </>
    );
  }
}

export default App;
