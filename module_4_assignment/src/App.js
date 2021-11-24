import {useState, useEffect} from "react"
import './App.css';

function App() {

  let [user, setUser] = useState("")
  let [userError, setUserError] = useState(false)
  let [userErrorMessage, setUserErrorMessage] = useState("")

  let [password, setPassword] = useState("")
  let [passwordError, setPasswordError] = useState(false)
  let [passwordErrorMessage, setPasswordErrorMessage] = useState("")

  let [email, setEmail] = useState("")
  let [emailError, setEmailError] = useState(false)
  let [emailErrorMessage, setEmailErrorMessage] = useState("")
  
  function logData(evt){
    evt.preventDefault()
  }

  function validateUser(evt){
    if(!evt.target.value || evt.target.value.length < 5){
      setUserError(true)
      setUserErrorMessage("Invalid username error")
    }
    else {
      setUser(evt.target.value)
      setUserError(false)
      console.log(user)
    }
  }

  function validatePassword(evt){
    if(!evt.target.value || evt.target.value.includes("Test")){
      setPasswordError(true)
      setPasswordErrorMessage("Invalid password error")
    }
    else {
      setPassword(evt.target.value)
      setPasswordError(false)
      console.log(password)
    }
  }
  function validateEmail(evt){
    if(!evt.target.value || !evt.target.value.includes("@")){
      setEmailError(true)
      setEmailErrorMessage("Invalid email error")
    }
    else {
      setEmail(evt.target.value)
      setEmailError(false)
      console.log(email)
    }
  }

  return (
    <div className="App">
      <form onSubmit={(evt) => logData}>
        <label for="">Username</label>
        <input type="text" id="username" onChange={(evt)=>validateUser(evt)}/>
        {userError ? userErrorMessage : null}
        <br />
        <label for="">Password</label>
        <input type="text" id="password" onChange={(evt)=>validatePassword(evt)}/>
        {passwordError ? passwordErrorMessage : null}
        <br />
        <label for="">Email</label>
        <input type="text" id="email" onChange={(evt)=>validateEmail(evt)}/>
        {emailError ? emailErrorMessage : null}
      </form>
    </div>
  );
}

export default App;
