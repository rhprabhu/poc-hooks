import logo from "./logo.svg";
import "./App.css";
import StateHook from "./components/StateHook";
import Effect1 from "./components/Effect1";
import User from "./components/ApiEffect";
import RefHook from "./components/RefHook";
import UseCallback from "./callback/UseCallback";
import Counter from "./UseMemoHook/Counter";
import MainEmpl from "./UseContext/MainEmpl";

function App() {
  return (
    <div className="App">
      {/* <StateHook /> */}
      <Effect1 /> 
      {/* <User /> */}
      {/* <RefHook /> */}
      {/* <UseCallback /> */}
      {/* <Counter /> */}
      {/* <MainEmpl /> */}
    </div>
  );
}

export default App;
