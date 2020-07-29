import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { PollData } from '../../Interfaces/PollData'

interface stateType {
    id : string | null,
    authorized: boolean
}

const initial: stateType = {
    id: null,
    authorized: false
}

const authSlice = createSlice({
  name: 'posts',
  initialState: initial,
  reducers: {
    setAuth(state, action: PayloadAction<string>) {
        state.id = action.payload;
        state.authorized = true;
    },
  },
});

// Actions
export const {setAuth} = authSlice.actions

// Thunks
// export {};

export default authSlice.reducer


