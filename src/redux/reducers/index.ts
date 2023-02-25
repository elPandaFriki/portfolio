import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { UPDATE_EXAMPLE } from '../actions';

const initialState: Redux.Reducer.Example = {
    value: 0
};

const reducers = combineReducers({
    example: createReducer(initialState, builder => {
        builder.addCase(UPDATE_EXAMPLE, (state, action): void => {
            state.value = action.payload.value;
        });
    })
});

export default reducers;
