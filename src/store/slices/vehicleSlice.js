import { createSlice, nanoid } from "@reduxjs/toolkit";

const vehicleSlice = createSlice({
  name: "vehicles",
  initialState: {
    searchTerm: "",
    list: [],
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addVehicle(state, action) {
      state.list.push({
        id: nanoid(),
        name: action.payload.name,
        cost: action.payload.cost,
      });
    },
    removeVehicle(state, action) {
      const activeVehicles = state.list.filter((v) => {
        return v.id !== action.payload;
      });
      state.list = activeVehicles;
    },
  },
});

export const { changeSearchTerm, addVehicle, removeVehicle } =
  vehicleSlice.actions;
export const vehicleReducer = vehicleSlice.reducer;
