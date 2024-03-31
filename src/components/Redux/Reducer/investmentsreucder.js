// reducers.js

const initialState = {
    investments: null,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_INVESTMENTS':
        return {
          ...state,
          investments: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  