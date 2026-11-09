import React from 'react';

class App extends React.Component {
  state = {
    num: 1
  }

  handleClick = () => {
    this.setState({
      num: this.state.num + 1
    })
    console.log(this.state.num);
  }
  
  render() {
    return (
      <>
        <div>Current number: {this.state.num}</div>
        <button onClick={this.handleClick}>+1</button>
      </>
    )
  }
}

export default App;