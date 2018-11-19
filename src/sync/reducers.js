import { combineReducers } from 'redux'

import {TodoActions} from './actions';
import {FilterActions} from './actions';

export function listReducer(state = [], action) {
  switch (action.type) {
    case TodoActions.ADD_ITEM:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ];
    case TodoActions.TOGGLE_TODO_ITEM:
      return state.map((item, index) => {
        if (index === action.index) {
          return Object.assign({}, item, {
            completed: !item.completed
          })
        }
        return item
      });
    case TodoActions.REMOVE_ITEM:
      return state.filter((item, index) => {
        return index !== action.index;
      });
    default:
      return state
  }
}

export function filterReducer(state = FilterActions.SHOW_ALL, action) {
  switch (action.type) {
    case FilterActions.SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state
  }
}


const rootReducer = combineReducers({listReducer, filterReducer});

export default rootReducer;