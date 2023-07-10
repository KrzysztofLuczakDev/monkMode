import { createSlice } from "@reduxjs/toolkit";


const initialState = [
  { id: "1", name: "Raw Rust"},
  { id: "2", name: "Slices Strange"},
  { id: "3", name: "Dude Big"},
  { id: "4", name: "Richy Rich"},
];

const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // postAdded: {
    //   reducer(state, action) {
    //     state.push(action.payload);
    //   },
    //   prepare(title, content) {
    //     return {
    //       payload: {
    //         id: nanoid(),
    //         title,
    //         content,
    //       },
    //     };
    //   },
    // },
  },
});

export const selectAllUsers = (state) => state.users;


export default usersSlice.reducer;