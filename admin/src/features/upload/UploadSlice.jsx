import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import UploadService from "./UploadService";

export const uploadImg = createAsyncThunk(
  "upload/images",
  async (data, thunkAPI) => {
    try {
      console.log("Files uploaded:", data);
      const formData = new FormData();
      for (let i = 0; i < data.length; i++) {
        console.log(data[i]);
        formData.append("images", data[i]);
      }
      return await UploadService.uploadImg(formData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const delImg = createAsyncThunk(
  "delete/images",
  async (id, thunkAPI) => {
    try {
      return await UploadService.deleteImg(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
const initialState = {
  images: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};
export const uploadSlice = createSlice({
  name: "images",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(uploadImg.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(uploadImg.fulfilled, (state, action) => {
        console.log(action.payload);
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.images = action.payload.images;
      })
      .addCase(uploadImg.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(delImg.pending, (state) => {

        state.isLoading = true;
      })
      .addCase(delImg.fulfilled, (state, action) => {
        console.log(action.payload) ;
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.images = [];
      })
      .addCase(delImg.rejected, (state, action) => {
        console.log(action.payload);

        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
        console.log(action.payload);
      });
  },
});
export default uploadSlice.reducer;
