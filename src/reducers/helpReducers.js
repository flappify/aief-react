const initState={
    helpDesk:[
    ]
}

const helpReducer=(state=initState,action)=>{
    switch(action.type){
        case 'CREATE_HELPDESK':
            return{
                ...state,
                submitError:'Submitted'
            }
        case 'CREATE_HELPDESK_ERROR':
            return{
                ...state,
                submitError:'Submission Error'
            }
        default:
            return state;
    }
}

export default helpReducer;