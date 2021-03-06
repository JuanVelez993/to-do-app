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
        
     

    const onCheckBox =  async (e, note)=>{
        const checked=e.currentTarget.checked;
        let noteChecked = {...note, done:checked}
        let noteUpdatedPromise = await fetch(`http://localhost:8081/api/update/note`, {
            method: 'PUT', headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(noteChecked),
        })
        let noteUpdated = await noteUpdatedPromise.json();
        dispatch({
            type: 'update-note',
            payload: noteUpdated
        })
    }

    const onDelete =  async (note) => {
        let response = await fetch(`http://localhost:8081/api/delete/note/${note.id}`, {
            method: 'DELETE'
        })
        if(response.status==200) {
            dispatch({
                type: 'remove-note',
                payload: note
            })
        }
         
    }
  return (
      <div>
          <h1>List of Notes</h1>
          <ul>
              {state.listOfNotes.map(note =>{
                  return <li style={note.done ? {textDecoration : 'line-through'}:{}} key={note.id}>
                      {note.title} {note.message}
                      <input onChange={(e)=>onCheckBox(e,note)} type="checkbox" checked={note.done}/>
                      <button className="delete-btn" onClick={(e) => onDelete(note)}>X</button>
                  </li>
              })}
          </ul>
          
      </div>
   
  )
}

export default ListOfToDo