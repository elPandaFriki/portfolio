import { createAsyncThunk } from '@reduxjs/toolkit';

export const updateExample = createAsyncThunk<
    void,
    Redux.Thunk.UpdateExample,
    {
        state: Redux.Store;
    }
>('updateExample', async () => {
    //
});
