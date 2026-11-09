import React from 'react';

class App extends React.Component {
  
  state = {
    num: 1
  }

  clickHandler = () => {
    this.setState(prevState => ({num: prevState.num + 1}))
    this.setState(prevState => ({num: prevState.num + 1}), () => console.log('after:', this.state.num))
    this.setState(prevState => ({num: prevState.num + 1}))
    
    console.log('before:', this.state.num);
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