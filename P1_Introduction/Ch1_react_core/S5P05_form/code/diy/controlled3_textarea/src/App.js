import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      value: ""
    };
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    }, () => console.log('current value:', this.state.value))
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("Value to submit:", this.state.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>【示例3】受控组件-文本域</h2>
        <textarea 
          cols="30"
          rows="10"
          value={this.state.value} 
          onChange={this.handleChange} 
        />
        <button type="submit">提交</button>
      </form>
    );
  }
}

export default App;
