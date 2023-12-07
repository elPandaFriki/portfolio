import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducers';
import logger from 'redux-logger';

const store = configureStore({
    reducer: reducers,
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware().concat(logger);
    }
});

export { store };
export * as ACTIONS from './actions';
export * as THUNKS from './thunk';
