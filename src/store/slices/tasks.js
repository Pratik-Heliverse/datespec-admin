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
        totalUserTasks: 0,
        taskDetails: {},
        userTaskAnalytics: {
            isLoading: false,
            data: {},
            error: null
        }
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
        getTaskDetails: getTaskDetails(),
        getUserTasksAnalytics: getUserTasksAnalytics()
    };

    function getUserTasks() {
        return createAsyncThunk(`${name}/getUsersTasks`, async ({ uid, filters }) => {
            const reqString = Object.entries(filters).reduce((prev, curr) => {
                if (curr[1] && curr[1] !== 'all') {
                    return `${prev}&${curr[0]}=${curr[1]}`;
                }
                return prev;
            }, `/admin/tasks/user/${uid}?`);

            try {
                return await axios.get(reqString);
            } catch (error) {
                return error;
            }
        });
    }

    function getTaskDetails() {
        return createAsyncThunk(`${name}/getTaskDetails`, async (taskId) => {
            try {
                return await axios.get(`/admin/tasks/${taskId}`);
            } catch (error) {
                return error;
            }
        });
    }

    function getUserTasksAnalytics() {
        return createAsyncThunk(`${name}/getUserTaskAnalytics`, async ({ uid, from, to }) => {
            try {
                return await axios.get(`/admin/tasks/analytics/${uid}?from=${from}&to=${to}`);
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
    getUserTasksAnalytics(builder);

    function getUserTasksReducer(builder) {
        const { fulfilled, pending, rejected } = extraActions.getUserTasks;
        builder.addCase(pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fulfilled, (state, action) => {
            state.isLoading = false;
            state.userTasks = action.payload?.data?.data ?? [];
            state.totalUserTasks = action.payload?.data?.total ?? 0;
            state.error = null;
        });
        builder.addCase(rejected, (state, action) => {
            state.isLoading = false;
            state.userTasks = [];
            state.totalUserTasks = 0;
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

    function getUserTasksAnalytics(builder) {
        const { fulfilled, pending, rejected } = extraActions.getUserTasksAnalytics;
        builder.addCase(pending, (state) => {
            state.userTaskAnalytics.isLoading = true;
        });
        builder.addCase(fulfilled, (state, action) => {
            state.userTaskAnalytics.isLoading = false;
            state.userTaskAnalytics.error = null;
            state.userTaskAnalytics.data = action.payload?.data?.data;
        });
        builder.addCase(rejected, (state, action) => {
            state.userTaskAnalytics.isLoading = false;
            state.userTaskAnalytics.error = action.payload?.message || 'Failed to fetch task analytics';
            state.userTaskAnalytics.data = {};
        });
    }
}
