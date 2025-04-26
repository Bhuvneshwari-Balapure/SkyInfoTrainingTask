import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import BCategoryService from "./BcategoryService";

// Thunks
export const getCategories = createAsyncThunk(
  "blogCategory/get-categories",
  async (_, thunkAPI) => {
    try {
      return await BCategoryService.getBlogCategories();
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.message || "Fetch categories failed"
      );
    }
  }
);

export const createNewblogCat = createAsyncThunk(
  "blogCategory/create-category",
  async (catData, thunkAPI) => {
    try {
      return await BCategoryService.createBlogCategory(catData);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.message || "Create category failed"
      );
    }
  }
);

export const getABlogCat = createAsyncThunk(
  "blogCategory/get-category",
  async (id, thunkAPI) => {
    try {
      return await BCategoryService.getBlogCategory(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message || "Get category failed");
    }
  }
);

export const updateABlogCat = createAsyncThunk(
  "blogCategory/update-category",
  async (blogCat, thunkAPI) => {
    try {
      return await BCategoryService.updateBlogCategory(blogCat);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.message || "Update category failed"
      );
    }
  }
);

export const deleteABlogCat = createAsyncThunk(
  "blogCategory/delete-category",
  async (id, thunkAPI) => {
    try {
      return await BCategoryService.deleteBlogCategory(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.message || "Delete category failed"
      );
    }
  }
);

// Reset
export const resetState = createAction("Reset_all");

// Initial state
const initialState = {
  bCategories: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

// Slice
export const PCategorySlice = createSlice({
  name: "bCategories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Get categories
      .addCase(getCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.bCategories = action.payload;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload || action.error.message;
      })

      // Create
      .addCase(createNewblogCat.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createNewblogCat.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.createBlogCategory = action.payload;
      })
      .addCase(createNewblogCat.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload || action.error.message;
      })

      // Get single
      .addCase(getABlogCat.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getABlogCat.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.blogCatName = action.payload.title;
      })
      .addCase(getABlogCat.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload || action.error.message;
      })

      // Update
      .addCase(updateABlogCat.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateABlogCat.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.updatedBlogCategory = action.payload;
      })
      .addCase(updateABlogCat.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload || action.error.message;
      })

      // Delete
      .addCase(deleteABlogCat.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteABlogCat.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.deletedBlogCategory = action.payload;
      })
      .addCase(deleteABlogCat.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload || action.error.message;
      })

      // Reset
      .addCase(resetState, () => initialState);
  },
});

export default PCategorySlice.reducer;
