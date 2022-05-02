import { useState } from 'react'
import './App.css'
import StoreProvider from './components/StoreProvider'
import ListOfToDo from './components/ListOfToDo'
import Form from './components/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <StoreProvider>
        <h1>Hello form my app</h1>
        <Form/>
        <ListOfToDo/>
      </StoreProvider>
      
    </div>
  )
}

export default App
