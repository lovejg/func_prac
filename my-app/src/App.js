import "./App.css";
import ClassCom from "./ClassCom";
import FuncCom from "./FuncCom";

function App() {
  let name = "리액트";
  const style = {
    backgroundColor: "black",
    color: "white",
    fontSize: "48px",
    fontWeight: "bold",
    padding: "20px",
  };

  return (
    <div className="container" style={style}>
      <ClassCom></ClassCom>
      <FuncCom></FuncCom>
      <h1 className="test">
        Hello, {name === "리액트" ? <h1>YES</h1> : null}!!
      </h1>
      <p>반갑습니다.</p>
    </div>
  );
}

export default App;
