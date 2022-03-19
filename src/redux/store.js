import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';

const persistedState = localStorage.getItem("reduxState") 
  ? JSON.parse(localStorage.getItem("reduxState"))
  : {};

const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => { 
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export default store;
