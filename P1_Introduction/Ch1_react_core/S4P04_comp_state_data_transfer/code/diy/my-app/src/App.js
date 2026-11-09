import React from 'react';

class App extends React.Component {
  
  state = {
    num: 1
  }

  // 1. via new variable
  clickHandler = () => {
    const newNum = this.state.num + 1;
    this.setState({ num: newNum });
    console.log(this.state.num);
  }

  // 2. via callback function
  // clickHandler = () => {
  //   this.setState(
  //     { num: this.state.num + 1 }, 
  //     () => console.log(this.state.num));
  // }
  
  render() {
    return (
      <>
        <div>Current number: {this.state.num}</div>
        <button onClick={this.clickHandler}>+1</button>
      </>
    )
  }
}

export default App;