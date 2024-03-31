import axios from 'axios';
import { endpoints, getEndpointURL } from '../Apiendpoint';

export const SET_MEMBER_DATA = 'SET_MEMBER_DATA';
export const SET_INVESTMENTS = 'SET_INVESTMENTS';
export const SAVE_RESPONSE_DATA = 'SAVE_RESPONSE_DATA'; 
export const SAVE_INVESTMENT_DETAILS = 'SAVE_INVESTMENT_DETAILS';
export const SAVE_STATEMENT = 'SAVE_STATEMENT';
export const SAVE_PROPERTY_DETAILS = 'SAVE_PROPERTY_DETAILS';
export const SAVE_PROPERTY_DATA = 'SAVE_PROPERTY_DATA';
export const SET_DASHBOARD_DATA = 'SET_DASHBOARD_DATA';
export const SAVE_CLICKED_TRANSACTION = 'SAVE_CLICKED_TRANSACTION';




export const saveClickedTransaction = (clickedTransaction) => {
  return {
    type: SAVE_CLICKED_TRANSACTION,
    payload: clickedTransaction
  };
};

export const setDashboardData = (rentalPropertyData, developmentPropertyData, holdingPropertyData) => ({
  type: SET_DASHBOARD_DATA,
  payload: { rentalPropertyData, developmentPropertyData, holdingPropertyData }
});



export const setMemberData = (memberData) => ({
  type: SET_MEMBER_DATA,
  payload: memberData,
});

export const savePropertyData = (propertyData) => ({
  type: SAVE_PROPERTY_DATA,
  payload:  propertyData
});

export const savePropertyDetails = (propertyDetails) => ({
  type: SAVE_PROPERTY_DETAILS,
  payload: propertyDetails
});


export const setInvestments = (investments) => ({
  type: 'SET_INVESTMENTS',
  payload: investments,
});


export const saveResponseData = (data) => ({
  type: SAVE_RESPONSE_DATA,
  payload: data
});


export const saveInvestmentDetails = (data, type ) => ({
  type: SAVE_INVESTMENT_DETAILS,
  payload: data,
  investmentType: type 
});

export const saveStatement = (investment) => {
  return {
    type: SAVE_STATEMENT,
    payload: investment
  };
};


export const fetchWorkData = () => async (dispatch) => {
  try {
    const apiRental = getEndpointURL(endpoints.getworkrentalproperty);
    const apiHolding = getEndpointURL(endpoints.getworkholdingproperty);
    const apiDevelopment = getEndpointURL(endpoints.getworkdevelopmentproperty); // New endpoint for development data

    const [rentalResponse, holdingResponse, developmentResponse] = await Promise.all([
      axios.get(apiRental),
      axios.get(apiHolding),
      axios.get(apiDevelopment), // Fetching development data
    ]);

    dispatch({
      type: 'FETCH_WORK_RENTAL_DATA_SUCCESS',
      payload: rentalResponse.data,
    });

    dispatch({
      type: 'FETCH_WORK_HOLDING_DATA_SUCCESS',
      payload: holdingResponse.data,
    });

    dispatch({
      type: 'FETCH_WORK_DEVELOPMENT_DATA_SUCCESS',
      payload: developmentResponse.data, // Dispatching action for development data
    });
  } catch (error) {
    dispatch({
      type: 'FETCH_WORK_DATA_FAILURE',
      payload: error.message,
    });
  }
};
