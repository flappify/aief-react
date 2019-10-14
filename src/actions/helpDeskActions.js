export const createHelpDesk=(helpDesk)=>{
    return(dispath, getState,{getFirebase,getFirestore})=>{
        //make a async call to database
        const firestore=getFirestore();
        firestore.collection('helpDesk').add({
            ...helpDesk,
            createdAt:new Date()
        }).then(()=>{
            dispath({type:'CREATE_HELPDESK',helpDesk})
            }).catch((err)=>{
                dispath({type:'CREATE_HELPDESK_ERROR',err});
            })
    }
};