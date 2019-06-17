import * as actionTypes from '../actions/action'
const intialState = {
 
    results:[]
  };
  
  
  // Reducer
  const reducer = (state = intialState, action) => {
    switch (action.type) {
            case actionTypes.store_Result:
              return {
                ...state,
                results: state.results.concat({id:new Date(), value: action.value})
              }
              case actionTypes.delete_Result:
                const updateArray = state.results.filter(result=>result.id !== action.id1)
                return {
                  ...state,
                  results: updateArray
                }
    }
    return state;
  };

  export default reducer;