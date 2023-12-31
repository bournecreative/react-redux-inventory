import { configureStore } from "@reduxjs/toolkit";
import { changeName, changeCost, formReducer } from "./slices/formSlice";
import {
  changeSearchTerm,
  addVehicle,
  removeVehicle,
  vehicleReducer,
} from "./slices/vehicleSlice";

const store = configureStore({
  reducer: {
    form: formReducer,
    vehicles: vehicleReducer,
  },
});

export {
  store,
  changeName,
  changeCost,
  changeSearchTerm,
  addVehicle,
  removeVehicle,
};
