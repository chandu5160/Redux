import * as actionTypes from '../actions/action'
const intialState = {
    counter: 0,
    results:[]
  };
  
  
  // Reducer
  const reducer = (state = intialState, action) => {
    switch (action.type) {
      case actionTypes.INCREMENT:
        return {
          ...state,
          counter: state.counter + 1
        };
      case actionTypes.DECREMENT:
        return {
          ...state,
          counter: state.counter -1
        };
        case actionTypes.INCREMENT10:
          return {
            ...state,
            counter: state.counter + action.value
          };
          case actionTypes.DECREMENT10:
            return {
              ...state,
              counter: state.counter - action.value
            };
            case actionTypes.store_Result:
                console.log('hello')
              return {
                ...state,
                results: state.results.concat({id:new Date(), value: state.counter})
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