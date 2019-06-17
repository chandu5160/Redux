import * as actionTypes from '../actions/action'
const intialState = {
    counter: 0
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
    }
    return state;
  };

  export default reducer;