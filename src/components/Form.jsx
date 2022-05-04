import React,{useContext,useState,useRef} from 'react'
import {Store} from './StoreProvider'

const Form = () => {

    const formRef=useRef(null)

    const onAdd = async (e) => {
        e.preventDefault();
        if (title && message) {
          const noteFromForm = { title, message, done: false }
          let noteSavedPromise = await fetch(`http://localhost:8081/api/save/note`, {
            method: 'POST', headers: {
              'Content-type': 'application/json',
            } ,
            body: JSON.stringify(noteFromForm),
       })
        let noteSaved=await noteSavedPromise.json();
        dispatch({type:'add-note',
        payload:noteSaved})
        }
        formRef.current.reset();
    }

    const {state, dispatch} = useContext(Store)

    const[title,setTitle]=useState('');
    const[message, setMessage] = useState('');

   const addingTitle=(e)=>{
        setTitle(e.target.value)

    }
    const addingMessage = (e) => {
        setMessage(e.target.value)

    }
  return (
    <form className="add-form" ref={formRef}>
      <div className="form-control">
        <label>Title: </label>
        <input onChange={addingTitle} type="text" name="title"/>
      </div>
      <div className="form-control">
        <label>Message: </label>
          <input onChange={addingMessage} type="text" name="message" />
      </div>
        <button className="btn" onClick={onAdd}>Add note</button>
    </form>
  )
}

export default Form