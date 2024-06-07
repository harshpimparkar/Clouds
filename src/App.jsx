import './App.css'
import Weather from "./components/Weather.jsx"
function App() {

  return (
    <>
      <h1 className='header'> <img src="src\assets\icons8-stormy-weather-32.png" alt="logo" height="50" width="50" draggable='false'className='logo'/>Clouds</h1>
      <Weather/>

    </>
  )
}

export default App
