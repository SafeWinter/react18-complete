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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault()
    const value = Object.fromEntries(new FormData(e.target).entries())
    console.log('Value to submit:', value)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>【示例7】受控组件-单选框 radio</h2>
        {COURSES.map(item => (
          <div key={item.id}>
            <label>
              <input type="radio" value={item.content} name="course"/>
              {item.content}
            </label>
          </div>
        ))}
        <button type="submit">提交</button>
      </form>
    );
  }
}

export default App;
