// reducers.js
import { SAVE_CLICKED_TRANSACTION } from '../Action';

const initialState = {
  clickedTransaction: null
};

const clickedTransactionreducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_CLICKED_TRANSACTION:
      return {
        ...state,
        clickedTransaction: action.payload
      };
    default:
      return state;
  }
};

export default clickedTransactionreducer;
