import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.inputRef = React.createRef();
  }

  handleClick() {
    console.log("Value to submit:", this.inputRef.current.value)
  }

  render() {
    return (
      <>
        <h2>【示例8】非受控组件-基础文本框</h2>
        <input type="text" ref={this.inputRef} defaultValue="abc" />
        <button onClick={this.handleClick}>提交</button>
      </>
    );
  }
}

export default App;
