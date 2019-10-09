const initState={
    events:""
}

const eventReducer=(state=initState,action)=>{
    switch(action.type){
        case 'UPDATE_EVENT':
            return state;
        case 'CREATE_EVENT':
            return{
                ...state,
                applyError:'Event Created'
            }
        case 'CREATE_EVENT_ERROR':
            return{
                ...state,
                applyError:'Event Creation Failed'
            }
        default:
            return state;
    }
}

export default eventReducer;