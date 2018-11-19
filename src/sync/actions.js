export const TodoActions = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  TOGGLE_TODO_ITEM: 'TOGGLE_TODO_ITEM'
};

export const FilterActions = {
  SET_VISIBILITY_FILTER: 'SET_VISIBILITY_FILTER',
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED'
};

export function addTodoItem(text) {
  return { type: TodoActions.ADD_ITEM, text }
}

export function removeTodoItem(index) {
  return { type: TodoActions.REMOVE_ITEM, index }
}

export function toggleTodoItem(index) {
  return { type: TodoActions.TOGGLE_TODO_ITEM, index }
}

export function setVisibilityFilter(filter) {
  return { type: FilterActions.SET_VISIBILITY_FILTER, filter }
}


