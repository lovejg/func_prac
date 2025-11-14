import "./App.css";
import TodoList from "./Todolist";
import MapTest from "./MapTest";
import Clock from "./Timer";
import MyWeather from "./MyWeather";

function App() {
  return (
    <div className="container">
      <TodoList></TodoList>
      <MapTest></MapTest>
      <Clock></Clock>
      <MyWeather weather="맑음"></MyWeather>
    </div>
  );
}

export default App;
