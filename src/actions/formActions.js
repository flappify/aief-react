export const updateForm =(form)=>{
    return(dispatch,getState,{getFirebase,getFirestore})=>{
        const firestore=getFirestore();
        firestore.collection('forms')
        dispatch({type:'UPDATE_FORM',form});
    }
};