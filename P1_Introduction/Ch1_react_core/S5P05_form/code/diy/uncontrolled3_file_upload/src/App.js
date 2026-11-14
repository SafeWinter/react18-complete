import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.fileRef = React.createRef();
  }

  handleClick() {
    console.log("Value to submit:", this.fileRef.current.files[0]);
  }

  render() {
    return (
      <>
        <h2>【示例11】非受控组件-文件上传</h2>
        <input type="file" ref={this.fileRef} />
        <button onClick={this.handleClick}>提交</button>
      </>
    );
  }
}

export default App;
