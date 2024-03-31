
const baseURL = 'http://localhost:3001'; // Replace with your actual API base URL

export const endpoints = {
  loginmember:'/logininvestor',
  logoutmember: '/logoutmember',
  getworkrentalproperty:'/getworkrentalproperty',
  getworkholdingproperty:'/getworkholdingproperty',
  getworkdevelopmentproperty:'/getworkdevelopmentproperty',
  contactus:'/contactus',
  investorinvestment:'/investorinvestment',
  investorsinvestmentsdetails:'/investorsinvestmentsdetails',
  getinvestortransactions:'/getinvestortransactions',
  getallinvestortransactions:'/getallinvestortransactions',
  getallinvestedproperty:'/getallinvestedproperty'
  // Add more endpoints as needed
};

export const getEndpointURL = (endpoint) => {
  return `${baseURL}${endpoint}`;
};
