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
  name: 'auth',
  initialState: initial,
  reducers: {
    updateAuth(state, action: PayloadAction<stateType>) {
        state.id = action.payload.id;
        state.authorized = action.payload.authorized;
    },
  },
});

// Actions
export const {updateAuth} = authSlice.actions

// Thunks
// export {};

export default authSlice.reducer


