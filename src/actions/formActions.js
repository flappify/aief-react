export const updateForm =(form)=>{
    return(dispatch,getState,{getFirebase,getFirestore})=>{
        dispatch({type:'UPDATE_FORM',form});
    }
};