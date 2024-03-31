// reducer.js
import { SET_DASHBOARD_DATA } from '../Action';

const initialState = {
  rentalPropertyData: null,
  developmentPropertyData: null,
  holdingPropertyData: null
};

const Dashboadreducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DASHBOARD_DATA:
      const { rentalPropertyData, developmentPropertyData, holdingPropertyData } = action.payload;
      return {
        ...state,
        rentalPropertyData,
        developmentPropertyData,
        holdingPropertyData
      };
    default:
      return state;
  }
};

export default Dashboadreducer;
