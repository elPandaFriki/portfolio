import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const store = configureStore({
    reducer: reducers,
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware().prepend().concat(thunk, logger);
    }
});

export { store };
export * as ACTIONS from './actions';
export * as THUNKS from './thunk';
