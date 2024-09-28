import { useState } from "react"

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 12
  })

  const isInputValid = userInput.duration >= 1

  function handleChange(inputIdentifier, value) {
    setUserInput(prevInput => {
      return {
        ...prevInput,
        [inputIdentifier]: +value
      }
    })
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange}/>
      {!isInputValid && (
        <p className="center">Please enter duration greater than zero.</p>
      )}
      {isInputValid && <Results input={userInput}/>}
      
    </>
  )
}

export default App
