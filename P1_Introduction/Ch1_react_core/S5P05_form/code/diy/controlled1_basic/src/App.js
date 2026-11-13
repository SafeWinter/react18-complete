import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      value: "",
    };
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("Value to submit:", this.state.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>【示例1】受控组件-基础</h2>
        <input value={this.state.value} onChange={this.handleChange} />
        <button type="submit">提交</button>
      </form>
    );
  }
}

export default App;
