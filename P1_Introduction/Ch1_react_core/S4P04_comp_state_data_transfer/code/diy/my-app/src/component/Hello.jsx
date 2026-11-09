const Hello = (props) => {
  return (
    <div>
      <h1>Hello, {props.stuInfo.name}!</h1>
      <p>Age: {props.stuInfo.age} ({typeof props.stuInfo.age})</p>
      <p>Score: {props.score} ({typeof props.score})</p>
    </div>
  );
};

export default Hello;