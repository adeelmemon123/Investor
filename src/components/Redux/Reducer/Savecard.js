import { SAVE_PROPERTY_DETAILS } from '../Action';

const initialState = {
  propertyDetails: {
    type: '' // Add a property to store the type
  }
};

const Savecard = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_PROPERTY_DETAILS:
      return {
        ...state,
        propertyDetails: {
          ...action.payload,
          type: action.payload.type // Save the type from payload to state
        }
      };
    default:
      return state;
  }
};

export default Savecard;
