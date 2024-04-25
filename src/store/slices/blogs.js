import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'utils/axios';

const name = 'blogs';
const initialState = createInitialState();
const extraActions = createExtraActions();

function createInitialState() {
    return {
        isLoading: false,
        error: null,
        blogs: []
    };
}

const slice = createSlice({
    name,
    initialState,
    extraReducers: createExtraReducers
});

export const blogActions = { ...slice.actions, ...extraActions };
export default slice.reducer;

function createExtraActions() {
    return {
        getBlogs: getBlogs(),
        createBlog: createBlog(),
        updateBlog: updateBlog(),
        deleteBlog: deleteBlog()
    };

    function getBlogs() {
        return createAsyncThunk(`${name}/getBlogs`, async () => {
            // const reqString = Object.entries(filters).reduce((prev, curr) => {
            //     if (curr[1] && curr[1] !== 'all') {
            //         return `${prev}&${curr[0]}=${curr[1]}`;
            //     }
            //     return prev;
            // }, `/tasks/user/${uid}?`);

            try {
                return await axios.get('/blog');
            } catch (error) {
                return error;
            }
        });
    }

    function createBlog() {
        return createAsyncThunk(`${name}/createBlog`, async (data) => {
            try {
                return await axios.post(`/blog`, data);
            } catch (error) {
                return error;
            }
        });
    }

    function updateBlog() {
        return createAsyncThunk(`${name}/updateBlog`, async (data) => {
            try {
                return await axios.patch(`/blog/${data?.id}`, data);
            } catch (error) {
                return error;
            }
        });
    }

    function deleteBlog() {
        return createAsyncThunk(`${name}/deleteBlog`, async (id) => {
            try {
                return await axios.delete(`/blog/${id}`);
            } catch (error) {
                return error;
            }
        });
    }
}

// Reducers
function createExtraReducers(builder) {
    getBlogsReducer(builder);
    createBLogReducer(builder);
    updateBlogReducer(builder);
    deleteBlogReducer(builder);

    function getBlogsReducer(builder) {
        const { fulfilled, pending, rejected } = extraActions.getBlogs;
        builder.addCase(pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fulfilled, (state, action) => {
            state.isLoading = false;
            state.blogs = action.payload?.data || [];
            state.error = null;
        });
        builder.addCase(rejected, (state, action) => {
            state.isLoading = false;
            state.blogs = [];
            state.error = action.payload?.message || 'Failed to fetch blogs';
        });
    }

    function createBLogReducer(builder) {
        const { fulfilled, pending, rejected } = extraActions.createBlog;
        builder.addCase(pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fulfilled, (state, action) => {
            state.isLoading = false;
            state.blogs = [...state.blogs, action.payload?.data];
            state.error = null;
        });
        builder.addCase(rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload?.message || 'Failed to create blog';
        });
    }

    function updateBlogReducer(builder) {
        const { fulfilled, pending, rejected } = extraActions.updateBlog;
        builder.addCase(pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fulfilled, (state, action) => {
            state.isLoading = false;
            state.blogs = state.blogs?.map((blog) => (blog?.id === action?.payload?.data?.id ? action?.payload?.data : blog));
            state.error = null;
        });
        builder.addCase(rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload?.message || 'Failed to update blog';
        });
    }

    function deleteBlogReducer(builder) {
        const { fulfilled, pending, rejected } = extraActions.deleteBlog;
        builder.addCase(pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fulfilled, (state, action) => {
            state.isLoading = false;
            state.blogs = state.blogs?.filter((blog) => blog?.id !== action?.payload?.data?.id);
            state.error = null;
        });
        builder.addCase(rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload?.message || 'Failed to delete blog';
        });
    }
}
