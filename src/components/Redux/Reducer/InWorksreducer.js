// reducers.js

// Initial state
const initialState = {
    rentalData: null,
    holdingData: null,
    developmentData: null,
    error: null,
  };
  
  // Reducer function
  const workDataReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_WORK_RENTAL_DATA_SUCCESS':
        return {
          ...state,
          rentalData: action.payload,
          error: null,
        };
      case 'FETCH_WORK_HOLDING_DATA_SUCCESS':
        return {
          ...state,
          holdingData: action.payload,
          error: null,
        };
      case 'FETCH_WORK_DEVELOPMENT_DATA_SUCCESS':
        return {
          ...state,
          developmentData: action.payload,
          error: null,
        };
      case 'FETCH_WORK_DATA_FAILURE':
        return {
          ...state,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default workDataReducer;
  