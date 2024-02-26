import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";
import { notification } from "antd";

//////////////////////////////////////////////////////////////////

export const fetchTasksAsync = createAsyncThunk(
  "kanban/fetchTasks",
  async () => {
    try {
      const response = await api.get(
        "/hiring/entryLevel/getCandidateForRecruiter"
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching tasks:", error);
      throw error;
    }
  }
);

export const fetchInterviewersAsync = createAsyncThunk(
  "kanban/fetchInterviewers",
  async () => {
    try {
      const response = await api.get("/hiring/auth/getListOfInterviewer");
      return response.data;
    } catch (error) {
      console.error("Error fetching interviewers:", error);
      throw error;
    }
  }
);

export const updateTaskAsync = createAsyncThunk(
  "kanban/updateTask",
  async (updatedData, { rejectWithValue }) => {
    try {
      const response = await api.put(
        `/hiring/entryLevel/updatedata/${updatedData.resumeId}/`,
        updatedData
      );
      return response.data;
    } catch (error) {
      console.error("Error updating task:", error);
      return rejectWithValue(error.data); // Use rejectWithValue to pass the error data
    }
  }
);

export const updateWaitingTaskAsync = createAsyncThunk(
  "kanban/updateWaitingTask",
  async (updatedData) => {
    try {
      const response = await api.post(
        "/hiring/evaluationLevel/finalEvaluation/",
        updatedData
      );
      return response.data;
    } catch (error) {
      console.error("Error updating task:", error);
      throw error;
    }
  }
);

export const fetchFinalDataByIdAsync = createAsyncThunk(
  "kanban/fetchFinalDataById",
  async (resumeId) => {
    try {
      const response = await api.get(
        `/hiring/evaluationLevel/finalEvalById/${resumeId}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching interviewer data by ID:", error);
      throw error;
    }
  }
);

export const fetchFinalDataAsync = createAsyncThunk(
  "kanban/fetchFinalData",
  async (resumeId) => {
    try {
      const response = await api.get(
        '/hiring/evaluationLevel/CandidateForFinalEval'
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching interviewer data by ID:", error);
      throw error;
    }
  }
);

const kanbanSlice = createSlice({
  name: "kanban",
  initialState: {
    tasks: {
      Assigned: [],
      Tech: [],
      Waiting: [],
      Selected: [],
    },
    interviewers: [],
    updatedData: [],
    finalData: [],
    EvaluationData: [],
    status: "idle",
    msg: "",
    error: "",
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
    setErrorMessage: (state, action) => {
      state.error = action.payload;
    },
    setMsgNull: (state, action) => {
      state.msg = action.payload;
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
        state.tasks.Assigned = allTasks.filter(
          (task) => task.currentStatus === "ASSIGNED"
        );
        state.tasks.Tech = allTasks.filter(
          (task) => task.currentStatus === "IN_TECH"
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
        state.msg = action.payload.message;
        // Show a success notification
        notification.success({
          message: "Update Successful",
          description: state.msg,
        });
        // Update the corresponding task in your state with the new data if needed
      })
      .addCase(updateTaskAsync.rejected, (state, action) => {
        state.error = action.error.message;
        // Show an error notification with the API error message
        notification.error({
          message: "Update Failed",
          description: state.error || "Failed to update. Please try again.",
        });
      })
      .addCase(updateWaitingTaskAsync.pending, (state) => {
        state.status = "updating";
      })
      .addCase(updateWaitingTaskAsync.fulfilled, (state, action) => {
        state.msg = action.payload.message;
        // Show a success notification
        notification.success({
          message: "Update Successful",
          description: state.msg,
        });
        // Update the corresponding task in your state with the new data if needed
      })
      .addCase(updateWaitingTaskAsync.rejected, (state, action) => {
        state.error = action.error.message;
        // Show an error notification with the API error message
        notification.error({
          message: "Update Failed",
          description: state.error || "Failed to update. Please try again.",
        });
      })
      .addCase(fetchInterviewersAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchInterviewersAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.interviewers = action.payload;
      })
      .addCase(fetchInterviewersAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchFinalDataByIdAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchFinalDataByIdAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Assuming the fetched data is an object containing the fields you need
        // You can update the state accordingly based on the structure of the API response
        state.finalData = action.payload;
      })
      .addCase(fetchFinalDataByIdAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchFinalDataAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchFinalDataAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Assuming the fetched data is an object containing the fields you need
        // You can update the state accordingly based on the structure of the API response
        state.tasks.Waiting = action.payload;
      })
      .addCase(fetchFinalDataAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
  },
});

export const { addTask, moveTask, UpdatedDataTask, setErrorMessage } =
  kanbanSlice.actions;
export default kanbanSlice.reducer;

// Selectors
export const getErrorFromUser = (state) => state.kanban.error;
export const getMsgFromUser = (state) => state.kanban.msg;
