import { combineReducers } from 'redux';

function themeReducer(state = 'light', action) {
  switch (action.type) {
    case 'SET_THEME':
      return action.payload.theme;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  theme: themeReducer,
});

export default rootReducer;
