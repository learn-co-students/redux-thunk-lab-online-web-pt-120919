const catsReducer = (state = {cats:[], loading:false}, action) => {

    switch(action.type) {
        case 'LOADING_CATS':
            return {
                ...state, cats:
                [...state, state.cats],
                loading:true
            }
            case 'ADD_CATS':
                return {
                    ...state, 
                    cats: action.cats,
                    loading:false
                    
                }
                default:
                    return state;
    }
}

export default catsReducer