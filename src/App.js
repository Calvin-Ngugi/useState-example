/*
The React useState Hook allows us to track state in a function component.

State generally refers to data or properties that need to be tracking in an application.

We initialize our state by calling useState in our function component.

useState accepts an initial state and returns two values:

The current state.
A function that updates the state.

We use array destructuring for the returned values of state
*/
import React, { useState } from 'react'

function App() {
  const [name, setName] = useState('Mario')
  const [age, setAge] = useState(23)

  const handleClick = () =>{
    setName('Luigi')
    setAge(26)
  }
  return (
    <div>
      <h2>Hi</h2>
      <h3>My name is {name} and my age is {age}</h3>
      <button onClick={handleClick}>Click to switch characters</button>
    </div>
  )
}

export default App