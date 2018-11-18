import { combineReducers } from 'redux';

import chuckReducer from './chuckReducer';

export default combineReducers({
  chuck: chuckReducer,
});
