import store from './store'
import {
  FilterActions,
  addTodoItem,
  removeTodoItem,
  toggleTodoItem,
  setVisibilityFilter
} from "./actions";

const syncDemo = function () {
  // let unsubscribe = store.subscribe(() =>
  //   console.log(store.getState())
  // );

  store.dispatch(addTodoItem('Learn about actions'));
  store.dispatch(addTodoItem('Learn about reducers'));
  store.dispatch(addTodoItem('Learn about store'));
  store.dispatch(toggleTodoItem(0));
  store.dispatch(toggleTodoItem(1));
  store.dispatch(removeTodoItem(1));
  store.dispatch(setVisibilityFilter(FilterActions.SHOW_COMPLETED));

  // unsubscribe();
};

export default syncDemo