import { SET_MEMBER_DATA } from '../Action';

// Initial state
const initialState = {
  memberData: null,
};

// Reducer function
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MEMBER_DATA:
      return {
        ...state,
        memberData: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
