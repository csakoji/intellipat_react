import logo from './logo.svg';
import { useRef } from 'react';
import './App.css';
import {useDocumentTitle} from "./useDocumentTitle"

function App() {

  let [title, setTitle] = useDocumentTitle("React App")
  let inputRef = useRef(null)

  return (
    <div className="App">
      <input type="text" placeholder="Enter the new title"
      ref={inputRef}/>
      <button onClick={()=>setTitle(inputRef.current.value)}>Change Title</button>
    </div>
  );
}

export default App;
