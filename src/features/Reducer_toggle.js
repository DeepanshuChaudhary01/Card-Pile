import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  open: false,
}

export const Reducer_toggle = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    toggleDrawer: (state, action) => {
      state.open = action.payload
    }
  }
})

export const selectToggler = (state) => state.toggle.open

export const { toggleDrawer } = Reducer_toggle.actions

export default Reducer_toggle.reducer