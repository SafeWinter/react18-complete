import React from 'react';

class World extends React.Component {

  clickHandler = () => {
    const data = Math.random();
    this.props.change(data)
  }
  render() {
    return (
      <div>
        <h1>World</h1>
        <p>Gender: {this.props.stuInfo.gender}</p>
        <button onClick={this.clickHandler}>触发父组件传递过来的函数</button>
      </div>
    );
  }
}

export default World;