import React, {useContext} from 'react'
import {Store} from './StoreProvider'

const ListOfToDo = () => {
    const {state, dispatch} = useContext(Store)
    console.log(state);
  return (
      <div>
          <h1>List Of To Do</h1>
          <ul>
              {state.listOfNotes.map(note =>{
                  return <li style={note.done ? {textDecoration : 'line-through'}:{}} key={note.id}>
                      {note.title} {note.message}
                  </li>
              })}
          </ul>
          
      </div>
   
  )
}

export default ListOfToDo