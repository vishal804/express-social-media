import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ErrorToast, InfoToast, SuccessToast } from "../../component";

const initialState = {
  posts: [],
  bookmarks: [],
  isLoading: false,
};

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  try {
    const response = await axios.get("/api/posts");
    return response.data.posts;
  } catch (error) {
    ErrorToast("Seems like error", error);
  }
});

export const createPost = createAsyncThunk(
  "posts/createPost",
  async (postData, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "/api/posts/",
        { postData },
        { headers: { authorization: token } }
      );
      SuccessToast("New post created");
      return response.data.posts;
    } catch (error) {
      ErrorToast("Seems Like error", error);
      rejectWithValue("Seems Like error", error);
    }
  }
);

export const editPost = createAsyncThunk(
  "posts/edit",
  async ({ postId, postData }, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `/api/posts/edit/${postId}`,
        { postData },
        { headers: { authorization: token } }
      );
      SuccessToast("Post updated");
      return response.data.posts;
    } catch (error) {
      ErrorToast("Seems Like error", error);
      rejectWithValue("Seems Like error", error);
    }
  }
);

export const deletePost = createAsyncThunk(
  "posts/delete",
  async (postId, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.delete(`/api/posts/${postId}`, {
        headers: { authorization: token },
      });
      SuccessToast("Post deleted");
      return response.data.posts;
    } catch (error) {
      ErrorToast("Seems Like error", error);
      rejectWithValue("Seems Like error", error);
    }
  }
);

export const likePost = createAsyncThunk(
  "posts/like",
  async (postId, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.post(
        `/api/posts/like/${postId}`,
        {},
        {
          headers: { authorization: token },
        }
      );

      return response.data.posts;
    } catch (error) {
      return rejectWithValue("Seems Like error", error);
    }
  }
);

export const dislikePost = createAsyncThunk(
  "posts/dislike",
  async (postId, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.post(
        `/api/posts/dislike/${postId}`,
        {},
        {
          headers: { authorization: token },
        }
      );
      return response.data.posts;
    } catch (error) {
      return rejectWithValue("Seems Like error", error);
    }
  }
);

export const getBookmarks = createAsyncThunk("posts/getBookmarks", async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get("/api/users/bookmark", {
      headers: { authorization: token },
    });
    return response.data.bookmarks;
  } catch (error) {
    ErrorToast("Seems like error", error);
  }
});

export const addToBookmarks = createAsyncThunk(
  "posts/addToBookmarks",
  async (postId, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `/api/users/bookmark/${postId}`,
        {},
        { headers: { authorization: token } }
      );
      InfoToast("Post bookmarked");
      return response.data.bookmarks;
    } catch (error) {
      ErrorToast("Seems like error", error);
      rejectWithValue("Seems Like error", error);
    }
  }
);

export const removeFromBookmarks = createAsyncThunk(
  "posts/removeFromBookmarks",
  async (postId, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `api/users/remove-bookmark/${postId}`,
        {},
        { headers: { authorization: token } }
      );
      InfoToast("Post removed from Bookmark");
      return response.data.bookmarks;
    } catch (error) {
      ErrorToast("Seems like error", error);
      rejectWithValue("Seems Like error", error);
    }
  }
);

export const addComment = createAsyncThunk(
  "posts/addComment",
  async ({ postId, commentData }, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `/api/comments/add/${postId}`,
        {
          commentData,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      return response.data.posts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const editComment = createAsyncThunk(
  "posts/editComment",
  async ({ postId, commentId, commentData }, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `/api/comments/edit/${postId}/${commentId}`,
        {
          commentData,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      return response.data.posts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteComment = createAsyncThunk(
  "posts/deleteComment",
  async ({ postId, commentId }, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `/api/comments/delete/${postId}/${commentId}`,
        {},
        {
          headers: {
            authorization: token,
          },
        }
      );
      return response.data.posts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
      })
      .addCase(getPosts.rejected, (state) => {
        state.isLoading = false;
      })

      .addCase(createPost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
      })

      .addCase(createPost.rejected, (state) => {
        state.isLoading = false;
      })

      .addCase(editPost.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(editPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
      })

      .addCase(editPost.rejected, (state) => {
        state.isLoading = false;
      })

      .addCase(deletePost.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(deletePost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
      })

      .addCase(deletePost.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(likePost.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(likePost.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(dislikePost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
      })
      .addCase(dislikePost.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getBookmarks.fulfilled, (state, action) => {
        state.bookmarks = action.payload;
      })
      .addCase(addToBookmarks.fulfilled, (state, action) => {
        state.bookmarks = action.payload;
      })
      .addCase(removeFromBookmarks.fulfilled, (state, action) => {
        state.bookmarks = action.payload;
      })

      .addCase(addComment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addComment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
      })
      .addCase(addComment.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(editComment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editComment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
      })
      .addCase(editComment.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteComment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
      });
  },
});

export const postsReducer = postsSlice.reducer;
