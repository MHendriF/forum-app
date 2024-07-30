// src/redux/threadsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export const fetchThreads = createAsyncThunk("threads/fetchThreads", async (_, { dispatch }) => {
  dispatch(showLoading());
  const response = await axios.get("https://forum-api.dicoding.dev/v1/threads");
  console.log("🚀 ~ fetchThreads ~ response:", response.data.data.threads);
  dispatch(hideLoading());
  return response.data.data.threads;
});

export const fetchThreadDetail = createAsyncThunk("threads/fetchThreadDetail", async (threadId, { dispatch }) => {
  dispatch(showLoading());
  const response = await axios.get(`https://forum-api.dicoding.dev/v1/threads/${threadId}`);
  console.log("🚀 ~ fetchThreadDetail ~ response:", response);
  dispatch(hideLoading());
  return response.data.data.detailThread;
});

export const fetchLeaderboard = createAsyncThunk("threads/fetchLeaderboard", async (_, { dispatch }) => {
  dispatch(showLoading());
  const response = await axios.get("https://forum-api.dicoding.dev/v1/leaderboards");
  console.log("🚀 ~ fetchLeaderboard ~ response:", response);
  dispatch(hideLoading());
  return response.data.data.leaderboards;
});

export const addComment = createAsyncThunk("threads/addComment", async ({ threadId, comment }, { dispatch }) => {
  dispatch(showLoading());
  const response = await axios.post(`https://forum-api.dicoding.dev/v1/threads/${threadId}/comments`, {
    body: comment,
  });
  dispatch(hideLoading());
  return response.data;
});

const threadsSlice = createSlice({
  name: "threads",
  initialState: { threads: [], threadDetail: null, leaderboard: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchThreads.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchThreads.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.threads = action.payload;
      })
      .addCase(fetchThreads.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchThreadDetail.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchThreadDetail.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.threadDetail = action.payload;
      })
      .addCase(fetchThreadDetail.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchLeaderboard.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchLeaderboard.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.leaderboard = action.payload;
      })
      .addCase(fetchLeaderboard.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addComment.fulfilled, (state, action) => {
        state.threadDetail.comments.push(action.payload);
      });
  },
});

export default threadsSlice.reducer;
