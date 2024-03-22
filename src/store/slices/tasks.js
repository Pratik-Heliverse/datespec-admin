import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'utils/axios';

const name = 'tasks';
const initialState = createInitialState();
const extraActions = createExtraActions();

function createInitialState() {
    return {
        isLoading: false,
        error: null,
        userTasks: [],
        taskDetails: {}
    };
}

const slice = createSlice({
    name,
    initialState,
    extraReducers: createExtraReducers
});

export const taskActions = { ...slice.actions, ...extraActions };
export default slice.reducer;

function createExtraActions() {
    return {
        getUserTasks: getUserTasks(),
        getTaskDetails: getTaskDetails()
    };

    function getUserTasks() {
        return createAsyncThunk(`${name}/getUsersTasks`, async (uid) => {
            try {
                return await axios.get(`/tasks/user/${uid}`);
            } catch (error) {
                return error;
            }
        });
    }

    function getTaskDetails() {
        return createAsyncThunk(`${name}/getTaskDetails`, async (taskId) => {
            try {
                return await axios.get(`/tasks/${taskId}`);
            } catch (error) {
                return error;
            }
        });
    }
}

// Reducers
function createExtraReducers(builder) {
    getUserTasksReducer(builder);
    getTaskDetailsReducer(builder);

    function getUserTasksReducer(builder) {
        const { fulfilled, pending, rejected } = extraActions.getUserTasks;
        builder.addCase(pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fulfilled, (state, action) => {
            state.isLoading = false;
            state.userTasks = action.payload?.data?.data || [];
            state.error = null;
        });
        builder.addCase(rejected, (state, action) => {
            state.isLoading = false;
            state.userTasks = [];
            state.error = action.payload?.message || 'Failed to fetch user tasks';
        });
    }

    function getTaskDetailsReducer(builder) {
        const { fulfilled, pending, rejected } = extraActions.getTaskDetails;
        builder.addCase(pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.taskDetails = action.payload?.data?.data;
        });
        builder.addCase(rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload?.message || 'Failed to fetch task details';
            state.taskDetails = {};
        });
    }
}
