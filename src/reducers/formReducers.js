const initState={
    forms:''
}

const formReducer=(state=initState,action)=>{
    switch(action.type){
        case 'UPDATE_FORM':
            return state;
        case 'CREATE_FORM':
            return state;
        case 'CREATE_FORM_ERROR':
            return state;
        default:
            return state;
    }
}

export default formReducer;