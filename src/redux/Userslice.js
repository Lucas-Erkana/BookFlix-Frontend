import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  currentUser: {},
  loggedIn: false,
  error: null,
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers(state, action) {
      state.users = action.payload;
    },
  },
});

export const { setUsers } = userSlice.actions;

export default userSlice.reducer;

const fetchUsers = () => async (dispatch) => {
  const response = await fetch('http://localhost:3000/api/v1/users');
  const data = await response.json();
  dispatch(setUsers(data));
};

export { fetchUsers };
