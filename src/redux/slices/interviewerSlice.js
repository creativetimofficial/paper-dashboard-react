import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

//////////////////////////////////////////////////////////////////

export const fetchTasksAsync = createAsyncThunk(
  "interviewer/fetchTasks",
  async () => {
    try {
      const response = await api.get(
        "/hiring/interviewer/getCandidateForInterviewer"
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching tasks:", error);
      throw error;
    }
  }
);

export const updateTaskAsync = createAsyncThunk(
  "interviewer/updateTask",
  async (updatedData) => {
    try {
      const response = await api.post(
        "/hiring/interviewer/SaveInterviewerData/",
        updatedData
      );
      return response.data;
    } catch (error) {
      console.error("Error updating task:", error);
      throw error;
    }
  }
);

export const fetchInterviewerDataByIdAsync = createAsyncThunk(
  "interviewer/fetchInterviewerDataById",
  async (resumeId) => {
    try {
      const response = await api.get(
        `/hiring/interviewer/getInterviewerDataById/${resumeId}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching interviewer data by ID:", error);
      throw error;
    }
  }
);

const interviewerSlice = createSlice({
  name: "interviewer",
  initialState: {
    tasks: {
      Tech: [],
      Waiting: [],
      Selected: [],
    },
    interviewerData: [],
    interviewers: [],
    updatedData: [],
    status: "idle",
    error: null,
  },
  reducers: {
    addTask: (state, action) => {
      const { column, task } = action.payload;
      state.tasks[column].push(task);
    },
    UpdatedDataTask: (state, action) => {
      const data = action.payload;
      state.updatedData.push(data);
    },
    moveTask: (state, action) => {
      const { sourceColumn, destinationColumn, sourceIndex, destinationIndex } =
        action.payload;

      if (
        state.tasks[sourceColumn] &&
        state.tasks[destinationColumn] &&
        sourceIndex >= 0 &&
        sourceIndex < state.tasks[sourceColumn].length
      ) {
        const task = state.tasks[sourceColumn].splice(sourceIndex, 1)[0];
        state.tasks[destinationColumn].splice(destinationIndex, 0, task);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasksAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTasksAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        const allTasks = action.payload;

        // Assuming the currentStatus values are strings like "ASSIGNED" and "IN_TECH"
        state.tasks.Tech = allTasks.filter(
          (task) => task.currentStatus === "IN_TECH"
        );
        state.tasks.Waiting = allTasks.filter(
          (task) => task.currentStatus === "IN_FINAL"
        );
      })
      .addCase(fetchTasksAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(updateTaskAsync.pending, (state) => {
        state.status = "updating";
      })
      .addCase(updateTaskAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Update the corresponding task in your state with the new data if needed
      })
      .addCase(fetchInterviewerDataByIdAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchInterviewerDataByIdAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Assuming the fetched data is an object containing the fields you need
        // You can update the state accordingly based on the structure of the API response
        state.interviewerData = action.payload;
      })
      .addCase(fetchInterviewerDataByIdAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { addTask, moveTask, UpdatedDataTask } = interviewerSlice.actions;
export default interviewerSlice.reducer;
