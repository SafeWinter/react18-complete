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
      values: []
    };
  }

  handleChange(e) {
    // DIY: 有效但并不符合 React 最佳实践
    // const set = new Set([...this.state.values])
    // const item = e.target.value
    // if(set.has(item)) {
    //   set.delete(item)
    // } else {
    //   set.add(item)
    // }
    // this.setState({
    //   values: Array.from(set)
    // }, () => console.log('Current option:', this.state.values))

    const values = Array.from(
      e.target.selectedOptions,
      option => option.value
    );

    this.setState({ values });
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log('Value to submit:', this.state.values)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>【示例6】受控组件-多选下拉框 select</h2>
        <select multiple={true} value={this.state.values} onChange={this.handleChange}>
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
