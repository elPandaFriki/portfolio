import { store } from '../redux';

export declare global {
    type ReduxStore = ReturnType<typeof store.getState>;
    type ReduxDispatch = typeof store.dispatch;
}
