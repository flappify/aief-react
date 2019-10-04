const initState={
    forms:[
        {id:'1',name:'Rashid',occ:'Plugin'},
        {id:'2',name:'Zohaib',occ:'ASIS'},
        {id:'3',name:'Samir',occ:'Youtuber'},
        {id:'4',name:'Saahil',occ:'Phekku'},
    ]
}

const formReducer=(state=initState,action)=>{
    switch(action.type){
        case 'UPDATE_FORM':
            return state
        default:
            return state
    }
}

export default formReducer;