// reducers.js
import { SAVE_PROPERTY_DATA } from '../Action';

const initialState = {
  propertyData: {
    // Initialize the 'type' property within propertyData
    type: ''
  }
};

const Allinvestedreducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_PROPERTY_DATA:
      return {
        ...state,
        propertyData: {
          ...action.payload,
          // Include the 'type' property from the payload
          type: action.payload.type
        }
      };
    default:
      return state;
  }
};

export default Allinvestedreducer;
