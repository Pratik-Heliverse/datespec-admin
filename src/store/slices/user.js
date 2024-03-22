// third-party
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// project imports
import axios from 'utils/axios';
// import { dispatch } from '../index';

// ----------------------------------------------------------------------

const name = 'users';
const initialState = createInitialState();
const extraActions = createExtraActions();
// const extraReducers = createExtraReducers();

function createInitialState() {
    return {
        error: null,
        isLoading: false,
        users: [],
        totalEntries: 0
    };
}

const slice = createSlice({
    name,
    initialState,
    extraReducers: createExtraReducers
});
export const userActions = { ...slice.actions, ...extraActions };

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------

function createExtraActions() {
    return {
        getUsers: getUsers()
    };

    function getUsers() {
        return createAsyncThunk(`${name}/getUsers`, async ({ rowsPerPage, currentPage, search }) => {
            try {
                const response = await axios.get(`/users?page=${currentPage}&limit=${rowsPerPage}&text=${search ?? ''}`);
                return response;
            } catch (error) {
                return error.message;
            }
        });
    }
}

function createExtraReducers(builder) {
    getUsersReducer(builder);
}

function getUsersReducer(builder) {
    const { pending, fulfilled, rejected } = extraActions.getUsers;
    builder.addCase(pending, (state) => {
        state.isLoading = true;
    });
    builder.addCase(fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload.data?.data ?? [];
        state.error = null;
        state.totalEntries = action.payload?.data?.total ?? 0;
    });
    builder.addCase(rejected, (state, action) => {
        state.isLoading = false;
        state.users = [];
        state.error = action.payload.message;
    });
}
