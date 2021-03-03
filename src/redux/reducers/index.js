import { combineReducers } from 'redux';

import filter from './filter';
import tickets from './tickets';

export default combineReducers({
  filter,
  tickets,
});
