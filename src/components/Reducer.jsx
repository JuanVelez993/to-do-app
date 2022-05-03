function reducer(state, action) {
    switch (action.type){
        case 'get-notes':
            const stateWitNotes={...state,listOfNotes:action.payload}
            return stateWitNotes
        case 'add-note':
            const newNote = action.payload;
                const newListofNotesAddedOne =[...state.listOfNotes,newNote]
                const newStateAddNote = {...state,listOfNotes:newListofNotesAddedOne}
            return newStateAddNote

        case 'remove-note':
            const newListofNotesWithoutPayloadNote = state.listOfNotes.filter(note => note.id !== action.payload.id)
             const newStateWithNoteDeleted = { ...state, listOfNotes: newListofNotesWithoutPayloadNote}
            return newStateWithNoteDeleted

        case 'update-note':
            const newListofNotes = state.listOfNotes.filter(note=>note.id !== action.payload.id)
            const newListofNoteswithModification=[...newListofNotes,action.payload]
            const newStateModifiedCheckbox = { ...state, listOfNotes: newListofNoteswithModification }
            return newStateModifiedCheckbox

    }

}
export default reducer