import React, {useContext,useEffect} from 'react'
import {Store} from './StoreProvider'

const ListOfToDo = () => {
    const {state, dispatch} = useContext(Store)

    useEffect(() => {
        let listOfNote=fetchAllNotes().then(notes => {
            let action = {
                type: 'get-notes', payload:notes
            }
            dispatch(action)
        })
    },[])

    const fetchAllNotes =async() =>{
        let response = await fetch(`http://localhost:8081/api/get/notes`)
        let data= await response.json()
        return data
    }
        
     

    const onCheckBox = (e, note)=>{
        const checked=e.currentTarget.checked;
        dispatch({
            type: 'update-note',
            payload: {...note,done:checked}
        })
    }

    const onDelete = (note) => {
         dispatch({
            type: 'remove-note',
            payload:note
        })
    }
  return (
      <div>
          <h1>List Of To Do</h1>
          <ul>
              {state.listOfNotes.map(note =>{
                  return <li style={note.done ? {textDecoration : 'line-through'}:{}} key={note.id}>
                      {note.title} {note.message}
                      <input onChange={(e)=>onCheckBox(e,note)} type="checkbox" checked={note.done}/>
                      <button onClick={(e) => onDelete(note)}>X</button>
                  </li>
              })}
          </ul>
          
      </div>
   
  )
}

export default ListOfToDo