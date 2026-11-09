import React from 'react';
import Hello from './component/Hello';
import World from './component/World';
import Button from './component/Button';

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
        <Button onClick={() => this.setState({ name: 'Bob', age: 20, gender: 'Male' })}>
          <div>Update</div>
          <div>Info</div>
        </Button>
      </>
    )
  }
}

export default App;