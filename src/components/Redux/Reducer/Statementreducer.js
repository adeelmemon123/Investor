import { SAVE_STATEMENT } from '../Action';

const initialState = {
  mystatement: null
};

const Statementreducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_STATEMENT:
      return {
        ...state,
        mystatement: action.payload
      };
    default:
      return state;
  }
};

export default Statementreducer;