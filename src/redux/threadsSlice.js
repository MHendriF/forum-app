// src/redux/threadsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchThreads = createAsyncThunk("threads/fetchThreads", async () => {
  const response = await axios.get("https://forum-api.dicoding.dev/v1/threads");
  console.log("🚀 ~ fetchThreads ~ response:", response.data.data.threads);
  return response.data.data.threads;
});

export const fetchThreadDetail = createAsyncThunk("threads/fetchThreadDetail", async (threadId) => {
  const response = await axios.get(`https://forum-api.dicoding.dev/v1/threads/${threadId}`);
  console.log("🚀 ~ fetchThreadDetail ~ response:", response);
  return response.data;
});

export const fetchLeaderboard = createAsyncThunk("threads/fetchLeaderboard", async () => {
  const response = await axios.get("https://forum-api.dicoding.dev/v1/leaderboard");
  console.log("🚀 ~ fetchLeaderboard ~ response:", response);
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
      });
  },
});

export default threadsSlice.reducer;
