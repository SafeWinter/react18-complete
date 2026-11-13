import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      courses: [
        {id: 1, content: 'HTML', checked: false},
        {id: 2, content: 'CSS', checked: false},
        {id: 3, content: 'JS', checked: false},
        {id: 4, content: 'Vue', checked: false},
        {id: 5, content: 'React', checked: false},
      ]
    };
  }

  handleChange(id) {
    const courses = [...this.state.courses]
    const target = courses.find(e => e.id === id)
    target.checked = !target.checked
    this.setState({
      courses
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.state.courses.map(c => c.checked))
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>【示例4】受控组件-多选框</h2>
        <ul>
        {this.state.courses.map(item => (
          <li key={item.id}>
            <label><input type="checkbox" value={item.checked} onChange={e => this.handleChange(item.id)} />
            {item.content}</label>
          </li>
        ))}
        </ul>
        <button type="submit">提交</button>
      </form>
    );
  }
}

export default App;
