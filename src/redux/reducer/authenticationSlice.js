import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  token: localStorage.getItem("token"),
  user: JSON.parse(localStorage.getItem("user")),
  isLoading: false,
};

export const loginHandler = createAsyncThunk(
  "authentication/loginHandler",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/auth/login", {
        username,
        password,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue("username or password is incorrect");
    }
  }
);

export const signupHandler = createAsyncThunk(
  "authentication/signupHandler",
  async (
    { username, password, confirmPassword, firstName, lastName },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post("/api/auth/signup", {
        username,
        password,
        confirmPassword,
        firstName,
        lastName,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue("Email already exist");
    }
  }
);

export const updateHandler = createAsyncThunk(
  "authentication/updateHandler",
  async (userData, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "/api/users/edit",
        {
          userData,
        },
        {
          headers: { authorization: token },
        }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Can not Update");
    }
  }
);

export const userFollow = createAsyncThunk(
  "user/userFollow",
  async (userId, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `/api/users/follow/${userId}`,
        {},
        {
          headers: {
            authorization: token,
          },
        }
      );
      return response.data.followUser;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const userUnfollow = createAsyncThunk(
  "users/userUnfollow",
  async (userId, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `/api/users/unfollow/${userId}`,
        {},
        {
          headers: {
            authorization: token,
          },
        }
      );
      return response.data.followUser;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    logoutHandler: (state) => {
      localStorage.removeItem("loginItems");
      state.token = null;
      state.user = null;
    },
  },
  extraReducers(builder) {
    builder

      .addCase(loginHandler.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginHandler.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.foundUser;
        state.token = action.payload.encodedToken;
        localStorage.setItem("token", state.token);
        localStorage.setItem("user", JSON.stringify(state.user));
      })
      .addCase(loginHandler.rejected, (state) => {
        state.isLoading = false;
      })

      .addCase(signupHandler.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signupHandler.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.createdUser;
        state.token = action.payload.encodedToken;
        localStorage.setItem("token", state.token);
        localStorage.setItem("user", JSON.stringify(state.user));
      })
      .addCase(signupHandler.rejected, (state) => {
        state.isLoading = false;
      })

      .addCase(updateHandler.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateHandler.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
      })
      .addCase(updateHandler.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(userFollow.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(userFollow.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user.following = [...state.user.following, action.payload];
      })
      .addCase(userFollow.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      })

      .addCase(userUnfollow.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(userUnfollow.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user.following = state.user.following.filter(
          (item) => item.username !== action.payload.username
        );
      })
      .addCase(userUnfollow.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      });
  },
});

export const { logoutHandler } = authenticationSlice.actions;
export const authenticationReducer = authenticationSlice.reducer;
