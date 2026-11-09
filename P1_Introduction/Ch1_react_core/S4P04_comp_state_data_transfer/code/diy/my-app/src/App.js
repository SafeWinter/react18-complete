import React from 'react';

class App extends React.Component {
  
  state = {
    num: 1
  }

  constructor(props) {
    super(props);
    this.timer = setInterval(() => {
      this.setState({ num: this.state.num + 1 },
      () => {
        console.log(this.state.num)
        if(this.state.num >= 5) {
          clearInterval(this.timer)
        }
      } // 这里拿到的是更新后的值
    )}, 1000)
  }
  
  render() {
    return (
      <>
        <div>Current number: {this.state.num}</div>
      </>
    )
  }
}

export default App;