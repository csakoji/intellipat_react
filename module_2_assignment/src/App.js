import {useState} from "react"

function App() {
  let [data, setData] = useState('')

  function displayData(evt){
    setData(evt.target.value)
  }
  return (
    <div className="App">
      <input type="text" onChange={displayData}/>
      <p>{data}</p>
    </div>
  );
}

export default App;
