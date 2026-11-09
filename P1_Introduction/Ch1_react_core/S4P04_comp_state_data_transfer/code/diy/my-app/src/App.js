import React from 'react';
import Hello from './component/Hello';
import World from './component/World';
import Button from './component/Button';

class App extends React.Component {

  state = {
    name: 'Alice',
    age: 25,
    gender: 'Female',
    score: 90
  }

  render() {
    const {name, age, gender} = this.state;
    const stuInfo = {name, age, gender}
    return (
      <>
        <Hello stuInfo={stuInfo} score={this.state.score} />
        <World stuInfo={stuInfo} />
        <Button onClick={() => this.setState({ name: 'Bob', age: 20, gender: 'Male' })}>
          <div>Update</div>
          <div>Info</div>
        </Button>
      </>
    )
  }
}

export default App;