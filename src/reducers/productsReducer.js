export default (state =[], action) =>{
    switch(action.type) {
        case 'FETCH_PRODUCTS':
            return [...state, ...action.payload];
        default:
      return state;
    }
}