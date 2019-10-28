const initState={
    events:''
}

const eventReducer=(state=initState,action)=>{
    switch(action.type){
        case 'CREATE_EVENT':
            return{
                ...state,
                eventError:'Event Created'
            }
        case 'CREATE_EVENT_ERROR':
            return{
                ...state,
                eventError:'Event Creation Failed'
            }
        default:
            return state;
    }
}

export default eventReducer;