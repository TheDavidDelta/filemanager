import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import thunk from 'redux-thunk';

import filemanagerReducer, { State as filemanagerState } from './filemanager/filemanager-reducer';
import filesReducer, { State as filesState } from './files/files-reducer';

type RootState = {
  filemanager: filemanagerState,
  files: filesState
}

const reducers = combineReducers({
  filemanager: filemanagerReducer,
  files: filesReducer
});

const middlewares = compose(applyMiddleware(thunk));

const store = createStore(reducers, middlewares);

export default store;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
