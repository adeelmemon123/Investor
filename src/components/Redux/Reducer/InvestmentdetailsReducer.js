import { SAVE_RESPONSE_DATA } from '../../Redux/Action';

const initialState = {
  responseData: {}
};

const InvestmentdetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_RESPONSE_DATA:
      return {
        ...state,
        responseData: action.payload
      };
    default:
      return state;
  }
};

export default InvestmentdetailsReducer;