const redux = require("redux");

const createStore = redux.createStore;

intialState = {
  counter: 0
};


// Reducer
const rootReducer = (state = intialState, action) => {
  switch (action.type) {
    case "Increment":
      return {
        ...state,
        counter: state.counter + 1
      };
    case "decrement":
      return {
        ...state,
        counter: state.counter - action.value
      };
  }
  return state;
};

// store 
const store = createStore(rootReducer);
console.log('store',store.getState());

//subscription
store.subscribe(()=>{
    console.log('subscription', store.getState());
})


// Dispatch
store.dispatch({ type: "Increment" });
console.log('dispatcher hello')
store.dispatch({ type: "decrement", value: 5 });
console.log('dispatcher',store.getState());
