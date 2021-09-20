import './App.css'
import Scene from './Components/Scene/Scene'
import data from './assets/data.json'

function App() {
  console.log(data, 'a')
  return data.map((options) => <Scene options={options} />)
}

export default App
