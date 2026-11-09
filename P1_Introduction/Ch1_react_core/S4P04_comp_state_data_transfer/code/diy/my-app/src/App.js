import React from 'react';
import Hello from './component/Hello';
import World from './component/World';

class App extends React.Component {

  state = {
    name: 'Alice',
    age: 25,
    gender: 'Female'
  }

  render() {
    return (
      <>
        <Hello stuInfo={this.state} />
        <World stuInfo={this.state} />
      </>
    )
  }
}

export default App;