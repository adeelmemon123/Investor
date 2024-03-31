// reducers.js
import { SAVE_INVESTMENT_DETAILS } from '../Action';

const initialState = {
  investmentDetails: {
    data: null,
    type: null
  }
};

export const Investments = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_INVESTMENT_DETAILS:
      return {
        ...state,
        investmentDetails: {
          data: action.payload,
          type: action.investmentType
        }
      };
    default:
      return state;
  }
};

export default Investments;


