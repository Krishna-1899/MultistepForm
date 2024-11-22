import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stepNumber: 0,
  loading: false,
  formData: null,
};

const formSlice = createSlice({
  name: "formData",
  initialState: initialState,
  reducers: {
    setStepNumber(state, value) {
      state.stepNumber = value.payload;
    },
    setLoading(state, value) {
      state.loading = value.payload;
    },
    setFormData(state, value) {
      state.formData = value.payload;
    },
  },
});

export const { setStepNumber, setLoading, setFormData} =
  formSlice.actions;

export default formSlice.reducer;
