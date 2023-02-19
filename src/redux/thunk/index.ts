import { createAsyncThunk } from '@reduxjs/toolkit';

export const updateExample = createAsyncThunk<
    void,
    Redux.ThunkPayload.UpdateExample,
    {
        state: ReduxStore;
    }
>('updateExample', async (payload, thunkApi) => {
    //
});
