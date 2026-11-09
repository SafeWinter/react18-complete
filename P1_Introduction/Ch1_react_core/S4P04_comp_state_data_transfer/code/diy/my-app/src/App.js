import React from 'react';
import Hello from './component/Hello';
import World from './component/World';

class App extends React.Component {

  state = {
    name: 'Alice',
    age: 25,
    gender: 'Female',
    score: 90
  }

  changeHandler = (data) => {
    console.log('接收到子组件传递的数据：', data);
  }

  render() {
    const {name, age, gender} = this.state;
    const stuInfo = {name, age, gender}
    return (
      <>
        <Hello stuInfo={stuInfo} score={this.state.score} />
        <World stuInfo={stuInfo} change={this.changeHandler} />
      </>
    )
  }
}

export default App;