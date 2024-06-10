import "./App.css";
import Weather from "./components/Weather.jsx";
import Bottom from "./components/Bottom.jsx";
function App() {
  return (
    <div className="container">
      <h1 className="header">
        <img src="/icons8-rain-96.png" alt="logo" className="logo" />
        Clouds
      </h1>
      <Weather />
    </div>
  );
}

export default App;
