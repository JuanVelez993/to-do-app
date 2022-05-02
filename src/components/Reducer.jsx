function reducer(state, action) {
    switch (action.type){
        case 'add-note':
            const newNote = { 
                id: Math.floor(Math.random() * 100),
                title:action.payload.title ,
                message:action.payload.message ,
                done:false }
                const newListofNotesAddedOne =[...state.listOfNotes,newNote]
                const newStateAddNote = {...state,listOfNotes:newListofNotesAddedOne}
            return newStateAddNote

        case 'remove-note':
            return state

        case 'update-note':
            return state

    }

}
export default reducer