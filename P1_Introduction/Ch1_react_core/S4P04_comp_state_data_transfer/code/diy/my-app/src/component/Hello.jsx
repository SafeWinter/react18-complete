const Hello = (props) => {
  return (
    <div>
      <h1>Hello, {props.stuInfo.name}!</h1>
      <p>Age: {props.stuInfo.age}</p>
    </div>
  );
};

export default Hello;