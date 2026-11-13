import React from "react";

const COURSES = [
  {id: 1, content: 'HTML'},
  {id: 2, content: 'CSS'},
  {id: 3, content: 'JS'},
  {id: 4, content: 'Vue'},
  {id: 5, content: 'React'},
]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      value: 'React'
    };
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    }, () => console.log('Current option:', this.state.value))
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log('Value to submit:', this.state.value)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>【示例5】受控组件-单项下拉框 select</h2>
        <select value={this.state.value} onChange={this.handleChange}>
        {COURSES.map(item => (
          <option key={item.id} value={item.content}>
            {item.content}
          </option>
        ))}
        </select>
        <button type="submit">提交</button>
      </form>
    );
  }
}

export default App;
