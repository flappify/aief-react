export const createDonate=(donate)=>{
    return(dispath, getState,{getFirebase,getFirestore})=>{
        //make a async call to database
        const firestore=getFirestore();
        firestore.collection('donations').add({
            ...donate,
            createdAt:new Date()
        }).then(()=>{
            dispath({type:'CREATE_DONATE',donate})
            }).catch((err)=>{
                dispath({type:'CREATE_DONATE_ERROR',err});
            })
    }
};