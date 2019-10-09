const initState={
    donations:""
}

const donateReducer=(state=initState,action)=>{
    switch(action.type){
        case 'UPDATE_DONATE':
            return state;
        case 'CREATE_DONATE':
            return{
                ...state,
                donateError:'Donation Done'
            }
        case 'CREATE_DONATION_ERROR':
            return{
                ...state,
                donateError:'Donation Failed'
            }
        default:
            return state;
    }
}

export default donateReducer;