import React from 'react';

class World extends React.Component {
  render() {
    return (
      <div>
        <h1>World</h1>
        <p>Gender: {this.props.stuInfo.gender}</p>
      </div>
    );
  }
}

export default World;