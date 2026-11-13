import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      value1: "",
      value2: ""
    };
  }

  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    switch (name) {
      case 'one':
        this.setState({
          value1: value?.toUpperCase()
        })
        break;
      case 'two':
        const value2 = value?.split('')
          .map(s => !isNaN(s) ? s : '').join('')
        this.setState({
          value2
        })
        break;
      default:
        break;
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("Value to submit:", this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>【示例2】受控组件-限制输出</h2>
        <input name="one" value={this.state.value1} onChange={this.handleChange} />
        <input name="two" value={this.state.value2} onChange={this.handleChange} />
        <button type="submit">提交</button>
      </form>
    );
  }
}

export default App;
