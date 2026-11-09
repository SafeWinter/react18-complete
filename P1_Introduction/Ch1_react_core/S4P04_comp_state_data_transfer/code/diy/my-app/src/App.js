import React from 'react';

class App extends React.Component {
  
  state = {
    num: 1
  }

// 1. via callback (not recommended)
// clickHandler = () => {
//   this.setState({num: this.state.num + 1},
//     () => this.setState({num: this.state.num + 1},
//       () => this.setState({num: this.state.num + 1})
//     )
//   );
// }

// 2. take a function as 1st arg
clickHandler = () => {
  Array.from({length: 3}, _ => this.setState(
    prevState => ({num: prevState.num + 1})));
}
  
  render() {
    return (
      <>
        <div>Current number: {this.state.num}</div>
        <button onClick={this.clickHandler}>+3</button>
      </>
    )
  }
}

export default App;