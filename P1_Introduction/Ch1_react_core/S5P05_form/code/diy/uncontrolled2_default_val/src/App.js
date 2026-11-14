import React from "react";

const COURESE = [
  { id: 1, label: "HTML", value: "html" },
  { id: 2, label: "CSS", value: "css" },
  { id: 3, label: "JavaScript", value: "js" },
  { id: 4, label: "Vue", value: "vue" },
  { id: 5, label: "React", value: "react" },
];
class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.selectRef = React.createRef();
  }

  handleClick() {
    console.log("Value to submit:", this.selectRef.current.value);
  }

  render() {
    return (
      <>
        <h2>【示例9】非受控组件- select 默认值</h2>
        <select ref={this.selectRef} defaultValue="react">
          {COURESE.map((item) => (
            <option key={item.id} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
        <button onClick={this.handleClick}>提交</button>
      </>
    );
  }
}

export default App;
