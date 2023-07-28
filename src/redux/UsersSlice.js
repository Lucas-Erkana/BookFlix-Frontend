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
      return {
        ...state,
        users: action.payload,
      };
    },
  },
});

export const { setUsers } = userSlice.actions;

export default userSlice.reducer;

const fetchUsers = () => async (dispatch) => {
  try {
    const response = await fetch('https://book-flix.onrender.com/api/v1/users');
    if (!response.ok) {
      throw new Error('Failed to fetch users.');
    }
    const data = await response.json();
    dispatch(setUsers(data));
  } catch (error) {
    // Handle errors here
    // console.error('Error fetching users:', error); // <-- Remove or refactor this line
  }
};

export { fetchUsers };
