// File: store.js

import { createStore, applyMiddleware ,combineReducers} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { thunk } from 'redux-thunk';
import reducer from './Reducer/Reducer';
import Investmentdetails from './Reducer/InvestmentdetailsReducer';
import investmentReducer from './Reducer/investmentsreucder';
import Statementreducer from './Reducer/Statementreducer';
import InWorksreducer from './Reducer/InWorksreducer';
import investments from './Reducer/Investments';
import Savecard from './Reducer/Savecard';
import propertyReducer from './Reducer/Allinvestedreducer';
import Dashboardreducer from './Reducer/Dashboadreducer';
import Clickedtransaction from './Reducer/Clickedtransaction';

const rootReducer = combineReducers({
    reducer,
    investmentReducer,
    Investmentdetails,
    investments,
    Statementreducer,
    workData:InWorksreducer,
    Savecard,
    allinvestedproperty: propertyReducer,
    dashboardreducer:Dashboardreducer,
    clickedtransaction:Clickedtransaction
    
  });
  
  const persistConfig = {
    key: 'root',
    storage,
    // Optionally, you can whitelist specific reducers to be persisted
    whitelist: ['clickedtransaction','dashboardreducer','reducer','investmentReducer','Investmentdetails','investments','Statementreducer','workData','Savecard','allinvestedproperty']
  };
  
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  
  const store = createStore(persistedReducer, applyMiddleware(thunk));
  const persistor = persistStore(store);
  
  export { store, persistor };