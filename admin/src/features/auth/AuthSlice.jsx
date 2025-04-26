import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "./AuthServices";

// Safe localStorage access (helps with SSR/Vite)
const getUserFromLocalStorage = () => {
  try {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  } catch {
    return null;
  }
};

const initialState = {
  user: getUserFromLocalStorage(),
  orders: [],
  orderbyuser: null,
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

// Thunks
export const login = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      return await AuthService.login(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message || "Login failed");
    }
  }
);

export const getOrders = createAsyncThunk(
  "order/get-orders",
  async (_, thunkAPI) => {
    try {
      return await AuthService.getOrders();
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.message || "Fetching orders failed"
      );
    }
  }
);

export const getOrderByUser = createAsyncThunk(
  "order/get-order",
  async (id, thunkAPI) => {
    try {
      return await AuthService.getOrder(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.message || "Fetching user order failed"
      );
    }
  }
);

// Slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        state.message = "Login successful";
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      // Get Orders
      .addCase(getOrders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.orders = action.payload;
      })
      .addCase(getOrders.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      // Get Order By User
      .addCase(getOrderByUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOrderByUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.orderbyuser = action.payload;
      })
      .addCase(getOrderByUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export default authSlice.reducer;
