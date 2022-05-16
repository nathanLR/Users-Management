import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import type { RootState } from '../../app/store'



//redux toolkit boilerplate
interface usersState {
  value: []
}

const initialState: usersState = {
  value: []
}

export const usersSlice = createSlice({
  name: 'users',
  
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<[]>) => {
        state.value = action.payload;
    }
  },
})

export const { setUsers } = usersSlice.actions

// // Other code such as selectors can use the imported `RootState` type
// export const getUsers = (state: RootState) => state.users.value

export default usersSlice.reducer